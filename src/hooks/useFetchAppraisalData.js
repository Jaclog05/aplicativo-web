export const useFetchAppraisalData = (dispatch) => {

  const fetchSquareMeterPrice = async (url) => {
    dispatch({ type: 'SET_IS_LOADING', value: true });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: 'SET_SQUARE_METER_PRICE', value : data[0].price });
    } catch (error) {
      console.error(`Error al obtener el precio por metro cuadrado:`, error);
    } finally {
      dispatch({ type: 'SET_IS_LOADING', value: false });
    }
  };

  const fetchQuestions = async (url) => {
    dispatch({ type: 'SET_IS_LOADING', value: true });
    try {
      const res = await fetch(url);
      const data = await res.json()
      dispatch({ type: 'SET_QUESTIONS', value: data.slice(0, 3) })
    } catch (error) {
      console.error('Error al obtener las preguntas orientadoras', error);
    } finally {
      dispatch({ type: 'SET_IS_LOADING', value: false });
    }
  }

  return { fetchSquareMeterPrice, fetchQuestions }
}