import React from 'react'
import styles from './NavBar.module.css'
import avaluoLogo from '../../assets/avaluo-icon.svg'
import { Link } from 'react-router'

function NavBar() {
  return (
    <nav className={styles.wrapper}>
      <Link to='/' className={styles.links}>
        <div className={styles.leftWrapper}>
          <img src={avaluoLogo} alt="avaluo Logo" className={styles.logo} />
          <p>Aplicativo Web Nombre</p>
        </div>
      </Link>
      <div className={styles.rightWrapper}>
        <div className={styles.aboutUs}>Sobre Nosotros</div>
        <Link to='/login' className={styles.links}>
          <button className={styles.loginButton}>Iniciar Sesión</button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar