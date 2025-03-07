import React, {useState} from "react";
import styles from "./appraisal/AppraisalComponent.module.css";
import Map from "./map/Map";
import SearchBar from "./searchBar/SearchBar";

function GeneralInfoForm({ onContinue, isLoading }) {
  const [coords, setCoords] = useState([11.0101922, -74.8231794084391])
  const [bounds, setBounds] = useState([
    10.9138881,
    11.1066443,
    -74.9192181,
    -74.7536320
  ])
  
  return (
    <form className={styles.formGeneralInfo} onSubmit={onContinue}>

      <input
        type="text"
        name="username"
        placeholder="Nombre"
        pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,}"
        className={styles.name}
        title="El nombre debe tener al menos 3 letras y no puede contener números ni caracteres especiales"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        className={styles.email}
        title="Ingrese un correo electrónico válido (ejemplo: usuario@dominio.com)"
        required
      />

      <SearchBar setBounds={setBounds} setCoords={setCoords}/>

      <select className={styles.strat} name="stratum" defaultValue="" required>
        <option value="" disabled>
          Estrato
        </option>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <select className={styles.type} name="type" defaultValue="" required>
        <option value="" disabled>
          Tipo de Vivienda
        </option>
        <option value="Unifamiliar">Unifamiliar</option>
        <option value="Multifamiliar">Multifamiliar</option>
      </select>

      <select className={styles.status} name="status" defaultValue="" required>
        <option value="" disabled>
          Estado de la Vivienda
        </option>
        <option value="usada">Usada</option>
        <option value="nueva">Nueva</option>
      </select>

      <input
        type="number"
        name="area"
        placeholder="Area (m2)"
        className={styles.area}
        step="1"
        min="30"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Precio (COP)"
        className={styles.price}
        min="10000000"
        required
      />

      <Map coords={coords} bounds={bounds} className={styles.mapSection}/>

      <input type="submit" value={isLoading ? 'Espere...' : "Continuar"} className={styles.submit} />
    </form>
  );
}

export default GeneralInfoForm;
