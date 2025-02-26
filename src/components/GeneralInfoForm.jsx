import React from "react";
import styles from "./appraisal/AppraisalComponent.module.css";

function GeneralInfoForm({ onContinue }) {
  return (
    <form className={styles.formGeneralInfo} onSubmit={onContinue}>
      <input
        type="text"
        placeholder="Direccion del inmueble"
        className={styles.addr}
        name="address"
      />

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

      <div className={styles.mapSection}>Mapa Interactivo</div>

      <input type="submit" value="Continuar" className={styles.submit} />
    </form>
  );
}

export default GeneralInfoForm;
