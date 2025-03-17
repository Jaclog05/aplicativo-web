import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import adminProfileIcon from "../../assets/user-profile-svgrepo.svg";
import { useNavigate } from "react-router-dom";

function Sidebar({ onClick, options }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("appraisalToken");
    sessionStorage.removeItem("appraisalsData");
    sessionStorage.removeItem("squareMPrices");
    navigate("/admin-login");
  };

  return (
    <aside className={styles.wrapper}>
      <div className={styles.profile}>
        <img
          src={adminProfileIcon}
          alt="Avatar admin"
          className={styles.avatar}
        />
        <p className={styles.adminName}>Admin 1</p>
        <p className={styles.adminEmail}>admin1@example.com</p>
      </div>

      <hr />

      <p className={styles.optionsTitle}>Opciones</p>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a
              name='list'
              value={options[0]}
              onClick={onClick}
              className={options[0] && styles.active}
            >
              Registros del aplicativo web
            </a>
          </li>
          <li>
            <a
              name='edit'
              value={options[1]}
              onClick={onClick}
              className={options[1] && styles.active}
            >
              Editar precio Metro cuadrado
            </a>
          </li>
          <li>
            <a onClick={handleLogout}>Cerrar Sesión</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
