import React from 'react'
import styles from './Home.module.css';
import InfoStep from '../../components/infoStep/InfoStep';
import AppraisalComponent from '../../components/appraisal/AppraisalComponent';
import { HashLink } from 'react-router-hash-link';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.coverWrapper}>
        <p className={styles.coverMainText}>
          Texto de Presentación
        </p>
        <p className={styles.coverSecondaryText}>
          En este texto se mostrará una pequeña descripción
          de lo que podemos hacer en este sitio o cualquier otra que se decida
        </p>
        <HashLink
          smooth to='/#appraisal_section' className={styles.coverButton}
        >
          Empezar
        </HashLink>
      </div>
      <div className={styles.infoSection}>
        <p className={styles.infoSectionTitle}>
          ¿Cómo funciona este aplicativo?
        </p>
        <div className={styles.stepsWrapper}>
          <InfoStep
            title="Paso 1"
            description="Información general del inmueble"
            explanation="Breve explicación de ese paso"
          />
          <InfoStep
            title="Paso 2"
            description="Preguntas orientadoras"
            explanation="Breve explicación de ese paso"
          />
          <InfoStep
            title="Paso 3"
            description="Obten un precio estimado"
            explanation="Breve explicación de ese paso"
          />
        </div>
      </div>
      <AppraisalComponent/>
      <Footer/>
    </div>
  )
}

export default Home