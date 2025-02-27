import React, {useState} from "react";
import styles from "./appraisal/AppraisalComponent.module.css";
import Map from "./map/Map";
import SearchBar from "./searchBar/SearchBar";

function GeneralInfoForm({ onContinue }) {
  const [coords, setCoords] = useState([11.0101922, -74.8231794084391])
  const [bounds, setBounds] = useState([
    10.9138881,
    11.1066443,
    -74.9192181,
    -74.7536320
  ])
  
  return (
    <form className={styles.formGeneralInfo} onSubmit={onContinue}>

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

      <select className={styles.status} name="status" defaultValue="" required>
        <option value="" disabled>
          Tipo de Vivienda
        </option>
        <option value="Unifamiliar">Unifamiliar</option>
        <option value="Multifamiliar">Multifamiliar</option>
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

      <input type="submit" value="Continuar" className={styles.submit} />
    </form>
  );
}

export default GeneralInfoForm;
