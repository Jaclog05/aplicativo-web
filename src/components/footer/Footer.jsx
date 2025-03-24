import React from "react";
import avaluoLogo from "../../assets/avaluo-icon.svg";

function Footer() {
  return (
    <footer className="bg-secondary text-black mt-3 py-3">
      <div className="row py-3 px-5">
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={avaluoLogo}
              alt="Avaluo Logo"
              className="me-3"
              width="80"
              height="80"
            />
            <div>
              <p className="fw-bold mb-1">Aplicativo Web Nombre</p>
              <p className="mb-0">Calculo de avalúos inmobiliarios</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-md-start text-center">
          <p className="fw-bold mb-1">Contáctanos</p>
          <p className="mb-1">
            <strong>Email:</strong> contacto@avaluos.com
          </p>
          <p className="mb-1">
            <strong>Tel:</strong> +57 123 456 7890
          </p>
          <p className="mb-0">
            <strong>Dir:</strong> Calle 123, Bogotá, Colombia
          </p>
        </div>

        <div className="col-md-4 text-md-start text-center">
          <p className="fw-bold mb-1">Enlaces de interés</p>
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
          </ul>
        </div>
      </div>
      <hr className="my-3" />
      <p className="text-center mb-0">
        Todos los derechos reservados © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
