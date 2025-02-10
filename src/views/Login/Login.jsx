import React from 'react'
import styles from "./Login.module.css"
import avaluoLogo from '../../assets/avaluo-icon.svg'

function Login() {
  return (
    <div className={styles.viewPage}>
      <form className={styles.wrapper}>
        <img src={avaluoLogo} alt="avaluo Logo" className={styles.imgIcon}/>
        <input type="text" placeholder='Ingrese su usuario'/>
        <input type="text" placeholder="Ingrese su contraseña"/>
        <input type="submit" value="Iniciar sesión"/>
      </form>
    </div>
  )
}

export default Login