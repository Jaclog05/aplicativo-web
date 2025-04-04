import React, {useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import EditPricesForm from '../../components/editPricesForm/EditPricesForm.jsx'

function Dashboard() {

  const [options, setOptions] = useState([1, 0])

  const handleClick = (e) => {
    const {name} = e.target;
    if(name == 'list'){
      setOptions([1, 0])
    } else {
      setOptions([0, 1])
    }
  }

  return (
    <div className="d-md-flex flex-md-row vh-100 row-md-12 bg-light">
      <Sidebar onClick={handleClick} options={options}/>
      <div className="p-2 p-md-5 h-100 d-flex flex-column text-center text-md-start col-md-10">
        {
          options[0] ?
            <>
              <p className="fs-4 fw-bold">Registros del aplicativo web</p> 
              <Table/>
            </> :
            <>
              <p className="fs-4 fw-bold">Editar precio Metro cuadrado</p>
              <EditPricesForm/>
            </>
        }
        
      </div>
    </div>
  )
}

export default Dashboard