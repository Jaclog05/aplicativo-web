import React, { useState } from "react";
import Map from "./map/Map";
import SearchBar from "./searchBar/SearchBar";
import LoadingButton from "./LoadingButton";

function GeneralInfoForm({ onContinue, isLoading }) {

  const [coordinates, setCoordinates] = useState(null);
  const [status, setStatus] = useState("");
  const [areaDisplay, setAreaDisplay] = useState("");
  const [rawArea, setRawArea] = useState("");
  const [priceDisplay, setPriceDisplay] = useState("");
  const [rawPrice, setRawPrice] = useState("");

  const handleAreaChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const numValue = parseInt(value || 0, 10);
    setRawArea(numValue)
    setAreaDisplay(numValue.toLocaleString("es-CO"))
  }

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const numValue = parseInt(value || 0, 10);
    setRawPrice(numValue);
    setPriceDisplay(numValue.toLocaleString("es-CO"));
  };

  return (
    <form className="container p-2 h-100" onSubmit={onContinue}>
      <div className="row h-100">
        <div className="col-md-8 mb-2">
          <div className="row h-100 mb-5">
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
              <SearchBar onAddressSelected={(coords) => setCoordinates(coords)}/>
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
                type="hidden"
                name="area"
                value={rawArea}
              />
              <input
                type="text"
                placeholder="Area (m2)"
                className="form-control"
                value={areaDisplay}
                onChange={handleAreaChange}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="hidden"
                name="price"
                value={rawPrice}
              />
              <input
                type="text"
                placeholder="Precio (COP)"
                className="form-control"
                value={priceDisplay}
                onChange={handlePriceChange}
                required
              />
            </div>
            {status === "usada" && (
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Años de uso"
                  required
                />
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div className="row g-1 h-100">
            <Map coordinates={coordinates}/>
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