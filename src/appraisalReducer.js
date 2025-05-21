import { fittoCorviniTable } from "./fittoCorviniTable";

export const initialState = {
  step: 1,
  currentIndex: 0,
  answers: {},
  generalInfo: {},
  questions: [],
  appraisal: 0,
  squareMeterPrice: 0,
  mapImageUrl: null,
  zipCode: 0,
  isLoading: false,
  fittoValue: 0,
  plusParams: [],
  appraisalWithDeprecation: 0
};

const calculateQualityScore = (answers) => {
  const total = Object.values(answers)
    .filter(answer => answer.parameterType === 'Regular')
    .reduce((acc, answer) => acc + answer.value, 0);
  return parseFloat(total.toFixed(2));
}

const calculateDepreciationScore = (answers) => {
  return Object.values(answers)
    .filter(answer => answer.parameterType === 'Depreciation')
    .reduce((acc, answer) => acc + answer.value, 0);
}

const getFittoPercentage = (age, depreciationClass) => {
  const row = fittoCorviniTable[age];
  if (!row) throw new Error(`Porcentaje de vida ${age} no encontrado`);
  return row[depreciationClass];
}

const filterPlusParameters = (answers) => {
  return Object.values(answers).filter(answer => answer.parameterType === "Plus" && answer.value !== 0)
}

const getDepreciationClass = (score) => {
  if (score >= 91 && score <= 100) return '1';
  if (score >= 81 && score <= 90)  return '1.5';
  if (score >= 71 && score <= 80)  return '2';
  if (score >= 61 && score <= 70)  return '2.5';
  if (score >= 51 && score <= 60)  return '3';
  if (score >= 41 && score <= 50)  return '3.5';
  if (score >= 31 && score <= 40)  return '4';
  if (score >= 21 && score <= 30)  return '4.5';
  if (score >=  0 && score <= 20)  return '5';
  return 'Clase desconocida';
}

const calculateAppraisal = (qualityScore, sqMeterPrice, area) => {
  return qualityScore * sqMeterPrice * area
}

const calculateAppraisalWithDepreciation = (appraisal, fittoValue) => {
  return appraisal - (appraisal * (fittoValue / 100))
}

export function appraisalReducer(state, action) {
  switch(action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'SET_QUESTIONS':
      return { ...state, questions: action.value }
    case 'NEXT_QUESTION':
      return { ...state, currentIndex: Math.min(state.currentIndex + 1, state.questions.length - 1) };
    case 'POST_GENERAL_INFO':
      return { ...state, generalInfo: action.value }
    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.index]: {
            paramName: action.paramName,
            parameterType: action.parameterType,
            value: action.value
          }
        }
      };
    case 'SET_APPRAISAL':
      const qualityScore = calculateQualityScore(state.answers)
      const depreciationScore = calculateDepreciationScore(state.answers)
      const depreciationClass = getDepreciationClass(depreciationScore)
      const plusParams = filterPlusParameters(state.answers)
      const fittoValue = getFittoPercentage(state.generalInfo.years, depreciationClass);

      const appraisalValue = calculateAppraisal(qualityScore, state.squareMeterPrice, state.generalInfo.area, fittoValue)
      const appraisalWithDeprecation = calculateAppraisalWithDepreciation(appraisalValue, fittoValue)
      return { ...state, appraisal: appraisalValue, fittoValue, plusParams, appraisalWithDeprecation };
    case 'SET_SQUARE_METER_PRICE':
      return { ...state, squareMeterPrice: action.value }
    case 'RESET':
      return initialState;
    case 'SET_MAP_IMAGE_URL':
      return { ...state, mapImageUrl: action.value }
    case 'SET_ZIP_CODE':
      return { ...state, zipCode: action.value }
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.value }
    default:
      return state;
  }
}