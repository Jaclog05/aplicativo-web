import React, { useContext } from "react";
import Map from "./map/Map";
import SearchBar from "./searchBar/SearchBar";
import LoadingButton from "./LoadingButton";
import { useGeneralInfoForm } from "../hooks/useGeneralInfoForm";
import { useGeneralInfoSubmit } from "../hooks/useGeneralInfoSubmit"
import { AppraisalsDispatchContext } from "../appraisalContext";

function GeneralInfoForm() {

  const dispatch = useContext(AppraisalsDispatchContext)

  const { formData, handleFieldChange, handleNumberFieldChange, setField } = useGeneralInfoForm();
  const handleGeneralInfoSubmit = useGeneralInfoSubmit(dispatch)

  return (
    <form className="container p-2 h-100" onSubmit={(e) => handleGeneralInfoSubmit(e) }>
      <div className="row h-100">
        <div className="col-md-8 mb-2">
          <div className="row h-100 mb-5">
            <div className="col-md-6">
              <input
                type="text"
                name="username"
                placeholder="Nombre*"
                className="form-control bg-light border border-1 border-secondary placeholder-text-dark"
                pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,}"
                title="El nombre debe tener al menos 3 letras y no puede contener números ni caracteres especiales"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico*"
                className="form-control bg-light border border-1 border-secondary placeholder-text-dark"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Ingrese un correo electrónico válido (ejemplo: usuario@dominio.com)"
                required
              />
            </div>
            <div className="col-md-6">
              <SearchBar onAddressSelected={setField('coordinates')} />
            </div>
            <div className="col-md-6">
              <select
                className="form-select bg-light border border-1 border-secondary placeholder-text-dark"
                name="stratum"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Estrato*
                </option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <select
                className="form-select bg-light border border-1 border-secondary placeholder-text-dark"
                name="type"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Tipo de Vivienda*
                </option>
                <option value="unifamiliar">Unifamiliar</option>
                <option value="multifamiliar">Multifamiliar</option>
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="houseReference"
                className="form-control bg-light border border-1 border-secondary placeholder-text-dark"
                placeholder="Referencia Catastral"
              />
            </div>
            <div className="col-md-4">
              <select
                className="form-select bg-light border border-1 border-secondary placeholder-text-dark"
                name="status"
                value={formData.status}
                onChange={handleFieldChange('status')}
              >
                <option value="" disabled>
                  Estado de la Vivienda*
                </option>
                <option value="usada">Usada</option>
                <option value="nueva">Nueva</option>
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="hidden"
                name="area"
                value={formData.rawArea}
              />
              <input
                type="text"
                placeholder="Area (m2)*"
                className="form-control bg-light border border-1 border-secondary placeholder-text-dark"
                value={formData.areaDisplay}
                onChange={handleNumberFieldChange('rawArea', 'areaDisplay')}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="hidden"
                name="price"
                value={formData.rawPrice}
              />
              <input
                type="text"
                placeholder="Precio (COP)*"
                className="form-control bg-light border border-1 border-secondary placeholder-text-dark"
                value={formData.priceDisplay}
                onChange={handleNumberFieldChange('rawPrice', 'priceDisplay')}
                required
              />
            </div>
            {formData.status === "usada" && (
              <div className="col-md-4">
                <input
                  type="number"
                  name="years"
                  className="form-control bg-light border border-1 border-secondary placeholder-text-dark"
                  placeholder="Años de uso*"
                  required
                />
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div className="row g-1 h-100">
            <Map coordinates={formData.coordinates} />
            <div className="w-100">
              <LoadingButton
                loadingMessage="Cargando Preguntas"
                text="Continuar"
              />
            </div>
          </div>
        </div>
        <p className="fst-italic m-md-0 mt-2 text-md-start text-center" style={{fontSize: '0.8rem'}}>
          *Campos obligatorios
        </p>
      </div>
    </form>
  );
}

export default GeneralInfoForm;