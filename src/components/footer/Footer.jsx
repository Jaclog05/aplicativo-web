import React from "react";
import MainIcon from "../MainIcon";

function Footer() {
  return (
    <footer className="bg-secondary text-light mt-3 py-3">
      <div className="row py-3 px-5">
        <div className="col-md-4">
          <div className="h-100 d-flex align-items-stretch justify-content-center">
            <MainIcon size="70"/>
            <div>
              <p className="fw-bold mb-1 text-dark">Aplicativo Web Nombre</p>
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
          <ul className="list-unstyled">
            <li>
              <a
                href="https://minciencias.gov.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none text-white"
              >
                Minciencias
              </a>
            </li>
            <li>
              <a
                href="https://www.uniatlantico.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none text-white"
              >
                Universidad del Atlántico
              </a>
            </li>
            <li>
              <a
                href="https://www.igac.gov.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none text-white"
              >
                IGAC
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
