import React from 'react'
import styles from './AboutUs.module.css';
import avaluoLogo from '../../assets/avaluo-icon.svg'

function AboutUs() {
  return (
    <div className={styles.aboutUsViewWrapper}>
      <div className={styles.coverWrapper}>
        <p className={styles.coverMainText}>
          Sobre Nosotros
        </p>
      </div>
      <div className={styles.aboutUsSection}>
        <div className={styles.aboutUsSectionBodyWrapper}>
          <p className={styles.aboutUsText}>
            Somos un grupo de arquitectos, apasionados por compartir el conocimiento
            que hemos adquirido durante nuestros cinco años de carrera universitaria.
            Nos hemos propuesto a través de este documento incentivar a la mejora de la calidad
            de las viviendas producidas por el sector inmobiliario en Colombia,
            a través de un instrumento de apoyo y asesoramiento para aquellos que
            están en proceso de comprar una vivienda. Queremos ayudarles a entender
            las cualidades de la propiedad y su relación con un precio justo.
            Nuestro objetivo es hacer una contribución significativa al mercado inmobiliario
            y la construcción de viviendas en todo el mundo. Esperamos que este proyecto
            sea el punto de partida para lograrlo.
          </p>
        </div>
      </div>
      <footer className={styles.footerSection}>
        <div>
          <div>
            <img src={avaluoLogo} alt="avaluo Logo" className={styles.imgIcon}/>
            <p>Aplicativo Web Nombre</p>
          </div>
          <div>
            Links de interés
          </div>
        </div>
        <hr/>
        <p>Todos los derechos reservados ©</p>
      </footer>
    </div>
  )
}

export default AboutUs