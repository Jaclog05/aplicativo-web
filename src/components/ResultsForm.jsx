import React, { useEffect } from "react";
import styles from "./appraisal/AppraisalComponent.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfReport from "./pdfReport/PdfReport";

function ResultsForm({ onReset, appraisal, generalInfo, sqMeterPrice }) {
  const { VITE_API_BASE_URL } = import.meta.env;

  const formatPrice = (price) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(price);

  useEffect(() => {
    const postAppraisal = async () => {
      const {
        username,
        email,
        stratum,
        type,
        price
      } = generalInfo;

      try {
        const response = await fetch(`${VITE_API_BASE_URL}/appraisals`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_name: username,
            user_email: email,
            stratum: stratum,
            property_type: type,
            property_value: price,
            estimated_value: appraisal
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Error al registrar avaluo");
        }
      } catch (error) {
        alert("Error al registrar los datos: ", error.message)
      }
    }
    postAppraisal()
  }, [])

  return (
    <form className={styles.formResults}>
      <p className={styles.resultsDescription}>
        El precio de venta para la propiedad ubicada en
        <br/>
        <strong className={styles.addressText} >
          {generalInfo.address}
        </strong>
        <br />
        tiene un precio estimado de
        <br />
      </p>
      <p className={styles.appraisalResult}>$ {formatPrice(appraisal)}</p>
      <PDFDownloadLink
        document={
          <PdfReport
            data={generalInfo}
            appraisal={appraisal}
            sqMeterPrice={sqMeterPrice}
          />
        }
        fileName="Reporte_Avaluo.pdf"
        className={styles.paperButton}
      >
        {({ loading }) => (loading ? "Generando..." : "Descargar Informe")}
      </PDFDownloadLink>
      <button onClick={onReset} className={styles.submit}>
        Nuevo Avalúo
      </button>
    </form>
  );
}

export default ResultsForm;
