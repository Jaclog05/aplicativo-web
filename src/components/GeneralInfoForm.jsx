import React from 'react'
import styles from './appraisal/AppraisalComponent.module.css'

function GeneralInfoForm({ onContinue }) {
  return (
    <form className={styles.formGeneralInfo} onSubmit={onContinue}>
      <input type="text" placeholder='Direccion del inmueble' className={styles.addr} />
      <input type="text" placeholder='Estrato' className={styles.strat} />
      <input type="text" placeholder='Localidad' className={styles.loc} />
      <input type="text" placeholder='Area (m2)' className={styles.area} />
      <input type="text" placeholder='Precio' className={styles.price} />
      <div className={styles.mapSection}>
        Mapa Interactivo
      </div>
      <input type="submit" value="Continuar" className={styles.submit}/>
    </form>
  )
}

export default GeneralInfoForm