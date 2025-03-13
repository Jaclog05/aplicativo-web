import React from "react";
import styles from "./appraisal/AppraisalComponent.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfReport from "./pdfReport/PdfReport";

function ResultsForm({ onReset, appraisal, generalInfo, sqMeterPrice }) {

  console.log('sqMeterPrice results form = ', sqMeterPrice)

  const formatPrice = (price) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(price);

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
