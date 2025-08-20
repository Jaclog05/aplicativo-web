import React from "react";
import InfoStep from "../../components/infoStep/InfoStep";
import AppraisalComponent from "../../components/appraisal/AppraisalComponent";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/HeroSection";

function Home() {
  return (
    <div className="w-100 bg-light">
      <HeroSection/>
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
            explanation="Ingresa los datos reales de tu vivienda."
            iconClass="bi bi-house-fill"
          />
          <InfoStep
            title="Paso 2"
            description="Preguntas orientadoras"
            explanation="Responde algunas preguntas clave para calcular mejor el valor de tu vivienda."
            iconClass="bi bi-patch-question-fill"
          />
          <InfoStep
            title="Paso 3"
            description="Obten un precio estimado"
            explanation="Conoce el valor estimado de tu inmueble y descarga el informe con todos los detalles."
            iconClass="bi bi-currency-exchange"
          />
        </div>
      </div>
      <AppraisalComponent />
      <Footer />
    </div>
  );
}

export default Home;
