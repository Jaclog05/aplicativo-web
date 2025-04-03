export const initialState = {
  step: 2,
  currentIndex: 0,
  answers: {},
  generalInfo: {},
  questions: [{
        "id": 1,
        "indicator": "Entorno",
        "subgroup": "Accesibilidad",
        "parameter": "Accesibilidad",
        "explanation": "Elementos o espacios que nos permiten acceder a la vivienda, (Vías vehiculares, andenes, escaleras, ascensores, rampas, entre otros).",
        "question": "¿En qué estado se encuentran las vías vehiculares de acceso?",
        "options": {
            "Malo": 0,
            "Bueno": 0.02,
            "Regular": 0.01
        }
    },
    {
        "id": 2,
        "indicator": "Entorno",
        "subgroup": "Accesibilidad",
        "parameter": "Accesibilidad",
        "explanation": "Elementos o espacios que nos permiten acceder a la vivienda, (Vías vehiculares, andenes, escaleras, ascensores, rampas, entre otros).",
        "question": "¿En qué estado se encuentran las vías peatonales de acceso?",
        "options": {
            "Malo": 0,
            "Bueno": 0.02,
            "Regular": 0.01
        }
    },
    {
        "id": 3,
        "indicator": "Entorno",
        "subgroup": "Accesibilidad",
        "parameter": "Accesibilidad",
        "explanation": "Elementos o espacios que nos permiten acceder a la vivienda, (Vías vehiculares, andenes, escaleras, ascensores, rampas, entre otros).",
        "question": "¿El entorno cuenta con rampas? ",
        "options": {
            "No": 0,
            "Si": 0.02
        }
    }
  ],
  appraisal: 0,
  squareMeterPrice: 2485714,
  mapImageUrl: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-l+000(-74.814255,10.951846)/-74.814255,10.951846,14/500x300?access_token=pk.eyJ1IjoiamFpZGVyNyIsImEiOiJjbThxanBoZXowZDF0Mm1xMTR1dGNnendwIn0.Gkx1gV9RihoP8JhxFp6T1Q"
};

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
    default:
      return state;
  }
}

/*export const initialState = {
  step: 1,
  currentIndex: 0,
  answers: {},
  generalInfo: {},
  questions: [],
  appraisal: 0,
  squareMeterPrice: 0,
  mapImageUrl: null
}; */