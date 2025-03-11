import React, {useState} from 'react'
import styles from './Dashboard.module.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import EditPricesForm from '../../components/editPricesForm/EditPricesForm'

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
    <div className={styles.wrapper}>
      <Sidebar onClick={handleClick} options={options}/>
      <div className={styles.rightSideWrapper}>
        {
          options[0] ?
            <>
              <p className={styles.titles}>Registros del aplicativo web</p> 
              <Table/>
            </> :
            <>
              <p className={styles.titles}>Editar precio Metro cuadrado</p>
              <EditPricesForm/>
            </>
        }
        
      </div>
    </div>
  )
}

export default Dashboard