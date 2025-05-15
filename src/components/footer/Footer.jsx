import React from "react";
import MainIcon from "../MainIcon";
import LogoIgac from "../../assets/LogoIgac.jpg";
import LogoMinciencias from "../../assets/logoMinciencias.png"
import LogoUniatlantico from "../../assets/LogoUniatlantico.png"

function Footer() {
  return (
    <footer className="bg-secondary text-light mt-3 py-3">
      <div className="row py-3 px-5">
        <div className="col-md-4">
          <div className="h-100 d-flex flex-md-row flex-column align-items-md-stretch justify-content-md-center align-items-center gap-2">
            <MainIcon size="70" className=""/>
            <div className="text-center text-md-start">
              <p className="fw-bold mb-1 text-dark">Avaluo360</p>
              <p className="mb-0">Calculo de avalúos inmobiliarios</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-md-start text-center">
          <p className="fw-bold mb-1 text-dark">Contáctanos</p>
          <p className="mb-1">
            contacto@avaluos.com
          </p>
          <p className="mb-1">
            {`(+57) 123 456 7890`}
          </p>
          <p className="mb-0">
            Calle 123, Bogotá, Colombia
          </p>
        </div>

        <div className="col-md-4 text-md-start text-center">
          <p className="fw-bold mb-1 text-dark">Enlaces de interés</p>
          <ul className="list-unstyled d-flex mb-0 gap-2">
            <li>
              <a
                href="https://minciencias.gov.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none text-white"
              >
                <img src={LogoMinciencias} alt="logo_minciencias" width="30" height="30"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.uniatlantico.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none text-white"
              >
                <img src={LogoUniatlantico} alt="logo_uniatlantico" width="30" height="30"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.igac.gov.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none text-white"
              >
                <img src={LogoIgac} alt="logo_igac" width="30" height="30"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-5" />
      <p className="text-center mb-0" style={{fontSize: '0.7rem'}}>
        Todos los derechos reservados © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
