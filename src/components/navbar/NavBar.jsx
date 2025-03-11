import React from "react";
import styles from "./NavBar.module.css";
import avaluoLogo from "../../assets/avaluo-icon.svg";
import { Link } from "react-router";
import { useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation();

  if (
    location.pathname === "/dashboard"
  ) {
    return null;
  }

  return (
    <nav className={styles.wrapper}>
      <Link to="/" className={styles.links}>
        <div className={styles.leftWrapper}>
          <img src={avaluoLogo} alt="avaluo Logo" className={styles.logo} />
          <p>Aplicativo Web Nombre</p>
        </div>
      </Link>
      <Link to="/aboutUs" className={styles.aboutUs}>
        Sobre Nosotros
      </Link>
    </nav>
  );
}

export default NavBar;
