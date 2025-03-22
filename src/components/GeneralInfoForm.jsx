import React, { useState } from "react";
import styles from "./appraisal/AppraisalComponent.module.css";
import Map from "./map/Map";
import SearchBar from "./searchBar/SearchBar";
import LoadingButton from "./LoadingButton";

function GeneralInfoForm({ onContinue, isLoading }) {
  const [coords, setCoords] = useState([11.0101922, -74.8231794084391]);
  const [bounds, setBounds] = useState([
    10.9138881, 11.1066443, -74.9192181, -74.753632,
  ]);

  const [status, setStatus] = useState("");

  return (
    <form className="container p-2 h-100" onSubmit={onContinue}>
      <div className="row h-100">
        <div className="col-md-8">
          <div className="row h-100">
            <div className="col-md-6">
              <input
                type="text"
                name="username"
                placeholder="Nombre"
                className="form-control"
                pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,}"
                title="El nombre debe tener al menos 3 letras y no puede contener números ni caracteres especiales"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                className="form-control"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Ingrese un correo electrónico válido (ejemplo: usuario@dominio.com)"
                required
              />
            </div>
            <div className="col-md-6">
              <SearchBar setBounds={setBounds} setCoords={setCoords} />
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="stratum"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Estrato
                </option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="type"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Tipo de Vivienda
                </option>
                <option value="unifamiliar">Unifamiliar</option>
                <option value="multifamiliar">Multifamiliar</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>
                  Estado de la Vivienda
                </option>
                <option value="usada">Usada</option>
                <option value="nueva">Nueva</option>
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="area"
                placeholder="Area (m2)"
                className="form-control"
                step="1"
                min="30"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="price"
                placeholder="Precio (COP)"
                className="form-control"
                min="10000000"
                required
              />
            </div>
            {status === "usada" && (
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Años de uso"
                />
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div className="row g-1 h-100">
            <Map coords={coords} bounds={bounds} />
            <div className="w-100">
              <LoadingButton
                isLoading={isLoading}
                loadingMessage="Cargando Preguntas"
                text="Continuar"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default GeneralInfoForm;