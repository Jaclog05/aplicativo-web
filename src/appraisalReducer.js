/* export const initialState = {
  step: 1,
  currentIndex: 0,
  answers: {},
  generalInfo: {},
  questions: [],
  appraisal: 0,
  squareMeterPrice: 0,
  mapImageUrl: null,
  zipCode: 0,
  isLoading: false
}; */

export const initialState = {
  "step": 2,
  "currentIndex": 0,
  "answers": "{}",
  "generalInfo": {
    "username": "Roberto Martinez",
    "email": "roberto@gmail.com",
    "address": "Carrera 27 50,Barranquilla, Atlántico, Colombia",
    "stratum": "3",
    "type": "multifamiliar",
    "houseReference": "252525",
    "status": "usada",
    "area": "180",
    "price": "250000000",
    "years": "4"
  },
  "questions": [],
  "appraisal": 0,
  "squareMeterPrice": 3750000,
  "mapImageUrl": "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-l+000(-74.7943,10.971201)/-74.7943,10.971201,14/500x300?access_token=pk.eyJ1IjoiamFpZGVyNyIsImEiOiJjbThxanBoZXowZDF0Mm1xMTR1dGNnendwIn0.Gkx1gV9RihoP8JhxFp6T1Q",
  "zipCode": "080012",
  "isLoading": false
}

const calculateQualityScore = (answers) => {
  return parseFloat(
    Object.values(answers).reduce((acc, value) => acc + value, 0).toFixed(2)
  )
}

const calculateAppraisal = (qualityScore, sqMeterPrice, area) => {
  return qualityScore * sqMeterPrice * area
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
      return {...state, answers: { ...state.answers, [action.index]: action.answer }};
    case 'SET_APPRAISAL':
      const qualityScore = calculateQualityScore(state.answers)
      const appraisalValue = calculateAppraisal(qualityScore, state.squareMeterPrice, state.generalInfo.area)
      return { ...state, appraisal: appraisalValue };
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