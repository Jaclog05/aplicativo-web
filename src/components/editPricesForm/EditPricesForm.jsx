import React, { useState, useEffect, useRef } from "react";
import styles from "./EditPricesForm.module.css";

function EditPricesForm() {
  const { VITE_API_BASE_URL } = import.meta.env;
  const [prices, setPrices] = useState([]);
  const pricesRef = useRef([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const chachedData = sessionStorage.getItem("squareMPrices");

    if(chachedData){
      setPrices(JSON.parse(chachedData));
      setLoading(false)
    }else {
      const fetchSquareMeterPrices = () => {
        fetch(`${VITE_API_BASE_URL}/square-meter-prices`)
        .then((res) => res.json())
        .then((data) => {
          setPrices(data);
          sessionStorage.setItem("squareMPrices", JSON.stringify(data))
          pricesRef.current = data;
        })
        .catch((error) => console.error("Error fetching prices: ", error)).
        finally(() => setLoading(false))
      }

      fetchSquareMeterPrices();
    }
  }, []);

  const handleChange = (id, value) => {
    pricesRef.current = pricesRef.current.map((item) =>
      item.id === id ? { ...item, price: Number(value) } : item
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = pricesRef.current.some(item =>
      item.price === 0 || item.price === null || isNaN(item.price) || item.price < 0
    );

    if (hasEmptyFields) {
      alert("Por favor, asegúrate de llenar todos los campos con valores válidos.");
      return;
    }

    try {
      const response = await fetch(`${VITE_API_BASE_URL}/square-meter-prices`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pricesRef.current)
      })

      if (!response.ok) {
        throw new Error("Error updating prices");
      }

      alert("Precios actualizados correctamente");
      setPrices([...pricesRef.current]);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al actualizar los precios");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {
        loading ?
          <h4>Obteniendo precios...</h4>
        :
        <div className={styles.container}>
          <div className={styles.column}>
            <h3>Vivienda usada</h3>
            {
              prices.filter(item => item.status === "usada")
              .map(item => (
                <div key={item.id} className={styles.inputGroup}>
                  <input
                    type="number"
                    id={`used-${item.id}`}
                    defaultValue={item.price}
                    onChange={(e) => handleChange(item.id, e.target.value)}
                    className={styles.input}
                    placeholder={`Estrato ${item.stratum}`}
                    min="0"
                  />
                </div>
              ))
            }
          </div>

          <div className={styles.column}>
            <h3>Vivienda nueva</h3>
            {
              prices.filter(item => item.status === "nueva")
              .map(item => (
                <div key={item.id} className={styles.inputGroup}>
                  <input
                    type="number"
                    id={`new-${item.id}`}
                    defaultValue={item.price}
                    onChange={(e) => handleChange(item.id, e.target.value)}
                    className={styles.input}
                    placeholder={`Estrato ${item.stratum}`}
                    min="0"
                  />
                </div>
              ))
            }
          </div>
        </div>
      }
      <button type="submit" className={styles.submitButton}>
        Actualizar precios
      </button>
    </form>
  );
}

export default EditPricesForm;
