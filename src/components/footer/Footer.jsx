import React from "react";
import IgacIcon from "../IgacIcon";
import FavIcon from "/favicon.svg";
import UniAtlanticoIcon from "../UniAtlanticoIcon";
import MinCienciasIcon from "../MinCienciasIcon";
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-secondary text-light mt-3 py-3">
      <div className="row py-3 px-5">
        <div className="col-md-4 border-md-end">
          <div className="h-100 d-flex flex-md-row flex-column align-items-md-stretch justify-content-md-center align-items-center gap-2">
            <img src={FavIcon} alt="main-icon" width="80" height="80" className="d-inline-block align-text-top"/>
            <div className="text-center text-md-start">
              <p className="fw-bold mb-1 text-dark">EVALUARQ</p>
              <p className="mb-0">Calculo de avalúos inmobiliarios</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-md-start text-center px-md-4">
          <p className="fw-bold mb-1 text-dark">Aliados</p>
          <ul className="list-unstyled d-flex justify-content-center justify-content-md-start mb-0 gap-2">
            <li>
              <a
                href="https://minciencias.gov.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none icon-link"
              >
                <MinCienciasIcon width="45" height="50"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.uniatlantico.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none icon-link"
              >
                <UniAtlanticoIcon width="37.5" height="50"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.igac.gov.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none icon-link"
              >
                <IgacIcon width="34" height="45"/>
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
