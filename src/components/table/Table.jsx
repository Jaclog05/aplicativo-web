import React, {useEffect, useState} from 'react'

const {VITE_API_BASE_URL} = import.meta.env

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cachedData = sessionStorage.getItem("appraisalsData");

    if(cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
    }else {
      const fetchAppraisalsData = async () => {
        try {
          setLoading(true);
          const response = await fetch(`${VITE_API_BASE_URL}/appraisals`);
          if(!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          const result = await response.json();
          setData(result)
          sessionStorage.setItem("appraisalsData", JSON.stringify(result))
        } catch (error) {
          console.error('Error: ', error)
        } finally {
          setLoading(false)
        }
      }
  
      fetchAppraisalsData();
    }
  }, [])

  return (
    <div className="table-responsive">
      {
        loading ?
          <h4>Obteniendo registros...</h4> :
          <table className="table table-bordered align-middle overflow-scroll border border-5">
            <thead className='text-center'>
              <tr className='table-success'>
                <th>Id registro</th>
                <th>Nombre Usuario</th>
                <th>Resultado Avalúo</th>
                <th>Fecha de consulta</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.user_name}</td>
                  <td>${item.estimated_value.toLocaleString()}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
      }
    </div>
  )
}

export default Table