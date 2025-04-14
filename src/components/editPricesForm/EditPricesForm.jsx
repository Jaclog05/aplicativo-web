import React, { useContext, useEffect, useRef, useState } from "react";
import LoadingButton from "../LoadingButton";
import Alert from "react-bootstrap/Alert";
import { AppraisalsDispatchContext } from "../../appraisalContext";

function EditPricesForm() {
  const { VITE_API_BASE_URL } = import.meta.env;
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useContext(AppraisalsDispatchContext)
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" })


  const formRef = useRef(null);

  const formatNumber = (num) => {
    return num?.toLocaleString('es-ES') || '';
  };

  useEffect(() => {
    const cachedPrices = sessionStorage.getItem("squareMPrices");

    if (cachedPrices) {
      setPrices(JSON.parse(cachedPrices));
      setIsLoading(false);
    } else {
      fetch(`${VITE_API_BASE_URL}/square-meter-prices`)
        .then((res) => res.json())
        .then((data) => {
          setPrices(data);
          sessionStorage.setItem("squareMPrices", JSON.stringify(data));
          setIsLoading(false);
        })
        .catch((err) => {
          setAlert({
            show: true,
            message: "Error al obtener precios",
            variant: "danger"
          })
          setIsLoading(false);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    let hasErrors = false;
    const updatedPrices = prices.map((priceObj) => {
      const rawValue = formData.get(`price-${priceObj.status}-${priceObj.id}`);
      const cleanedValue = rawValue.replace(/\./g, '');

      if (!cleanedValue || isNaN(cleanedValue)) {
        hasErrors = true;
        return priceObj;
      }

      return {
        ...priceObj,
        price: Number(cleanedValue),
      };
    });

    if (hasErrors) {
      setAlert({
        show: true,
        message: "Todos los campos deben contener números válidos",
        variant: "danger"
      });
      return;
    }

    dispatch({ type: 'SET_IS_LOADING', value: true });

    try {
      const response = await fetch(`${VITE_API_BASE_URL}/square-meter-prices`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPrices),
      });

      if (!response.ok) {
        setAlert({
          show: true,
          message: "No se pudieron actualizar los precios",
          variant: "danger"
        });
        return;
      }

      setPrices(updatedPrices);
      sessionStorage.setItem("squareMPrices", JSON.stringify(updatedPrices));
      setAlert({
        show: true,
        message: "Precios actualizados correctamente",
        variant: "success"
      })
    } catch (error) {
      setAlert({
        show: true,
        message: "Error al actualizar precios",
        variant: "danger"
      })
    } finally {
      dispatch({ type: 'SET_IS_LOADING', value: false });
    }
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  const usedPrices = prices.filter((item) => item.status === "usada");
  const newPrices = prices.filter((item) => item.status === "nueva");

  return (
    <form
      ref={formRef}
      className="w-100 bg-primary shadow rounded p-2 text-dark"
      onSubmit={handleSubmit}
    >
      {
        alert.show &&(
          <Alert
            variant={alert.variant}
            onClose={() => setAlert({ ...alert, show: false })}
            className="fixed-top w-100 text-center px-2"
            dismissible
          >
            {alert.message}
          </Alert>
        )
      }
      <div className="d-flex flex-column flex-md-row gap-2">
        <div className="flex-md-fill text-center">
          <h3 className="fs-5 fw-bold">Vivienda usada</h3>
          {usedPrices.map((item) => (
            <div key={item.id} className="d-flex flex-column mb-2 w-100">
              <label htmlFor={`price-${item.status}-${item.id}`} className="fw-bold text-start my-0 mx-2" style={{fontSize: '14px'}}>
                Estrato {item.stratum}
              </label>
              <input
                type="text"
                name={`price-${item.status}-${item.id}`}
                defaultValue={formatNumber(item.price)}
                className="form-control text-center text-md-start border border-1 border-dark"
                onKeyDown={(e) => {
                  if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex-md-fill text-center">
          <h3 className="fs-5 fw-bold">Vivienda nueva</h3>
          {newPrices.map((item) => (
            <div key={item.id} className="d-flex flex-column mb-2 w-100">
              <label htmlFor={`price-${item.status}-${item.id}`} className="fw-bold text-start my-0 mx-2" style={{fontSize: '14px'}}>
                Estrato {item.stratum}
              </label>
              <input
                type="text"
                name={`price-${item.status}-${item.id}`}
                defaultValue={formatNumber(item.price)}
                className="form-control text-center text-md-start border border-1 border-dark"
                onKeyDown={(e) => {
                  if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <LoadingButton
        loadingMessage="Actualizando Precios"
        text="Actualizar Precios"
      />
    </form>
  );
}

export default EditPricesForm;
