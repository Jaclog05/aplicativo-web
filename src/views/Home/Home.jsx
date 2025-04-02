import React from "react";
import InfoStep from "../../components/infoStep/InfoStep";
import AppraisalComponent from "../../components/appraisal/AppraisalComponent";
import { HashLink } from "react-router-hash-link";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div className="w-100 bg-light">
      <div
        className="text-center text-dark bg-primary py-5 d-flex flex-column align-items-center justify-content-center"
        style={{ height: "75vh" }}
      >
        <p className="display-4 fw-bold">Texto de Presentación</p>
        <p className="w-50">
          En este texto se mostrará una pequeña descripción de lo que podemos
          hacer en este sitio o cualquier otra que se decida
        </p>
        <HashLink
          smooth
          to="/#appraisal_section"
          className="btn btn-secondary text-light"
        >
          Empezar
        </HashLink>
      </div>
      <div
        className="px-5 pb-4 my-md-5 mt-md-0 d-flex flex-column"
        style = {{height: "100%"}}
      >
        <h4 className="row py-4 fw-bold">
          ¿Cómo funciona este aplicativo?
        </h4>
        <div className="row flex-grow-1 d-flex justify-content-around gap-2">
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
      <AppraisalComponent />
      <Footer />
    </div>
  );
}

export default Home;
