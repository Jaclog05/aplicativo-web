export const useFetchAppraisalData = (dispatch) => {

  const fetchSquareMeterPrice = async (url, setIsLoading) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: 'SET_SQUARE_METER_PRICE', value : data[0].price });
    } catch (error) {
      console.error(`Error al obtener el precio por metro cuadrado:`, error);
    } finally {
      setIsLoading(false)
    }
  };

  const fetchQuestions = async (url, setIsLoading) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json()
      dispatch({ type: 'SET_QUESTIONS', value: data.slice(0, 3) })
    } catch (error) {
      console.error('Error al obtener las preguntas orientadoras', error);
    } finally {
      setIsLoading(false)
    }
  }

  return { fetchSquareMeterPrice, fetchQuestions }
}