import React from 'react';
import styles from './Footer.module.css';
import avaluoLogo from '../../assets/avaluo-icon.svg';

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <img src={avaluoLogo} alt="Avaluo Logo" className={styles.imgIcon} />
          <div>
            <p className={styles.title}>Aplicativo Web Nombre</p>
            <p>Calculo de avalúos inmobiliarios</p>
          </div>
        </div>
        
        <div className={styles.footerCenter}>
          <h4>Contáctanos</h4>
          <p><strong>Email:</strong> contacto@avaluos.com</p>
          <p><strong>Tel:</strong> +57 123 456 7890</p>
          <p><strong>Dir:</strong> Calle 123, Bogotá, Colombia</p>
        </div>
        
        <div className={styles.footerRight}>
          <h4>Enlaces de interés</h4>
          <ul>
            <li><a href="https://minciencias.gov.co/" target="_blank" rel="noopener noreferrer">Minciencias</a></li>
            <li><a href="https://www.uniatlantico.edu.co/" target="_blank" rel="noopener noreferrer">Universidad del Atlántico</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Todos los derechos reservados © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
