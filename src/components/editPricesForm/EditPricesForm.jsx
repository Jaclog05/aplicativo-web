import React from 'react';
import styles from './EditPricesForm.module.css';

function EditPricesForm() {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Vivienda usada</h3>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={styles.inputGroup}>
              <input
                type="number"
                id={`used-${index}`}
                className={styles.input}
                placeholder={`Estrato ${index + 1}`}
                min="0"
              />
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3>Vivienda nueva</h3>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={styles.inputGroup}>
              <input
                type="number"
                id={`new-${index}`}
                className={styles.input}
                placeholder={`Estrato ${index + 1}`}
                min="0"
              />
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>Actualizar precios</button>
    </form>
  );
}

export default EditPricesForm;
