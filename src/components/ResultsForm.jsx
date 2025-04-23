import React, { useEffect, useContext } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfReport from "./pdfReport/PdfReport";
import { AppraisalsContext } from "../appraisalContext";
import { useSubmitAppraisal } from "../hooks/useSubmitAppraisal";
import { formatCurrency } from "../utils/formatCurrency";

function ResultsForm({ onReset }) {

  const {appraisal, generalInfo, squareMeterPrice, mapImageUrl, zipCode} = useContext(AppraisalsContext)

  useSubmitAppraisal();

  return (
    <form className="d-flex flex-column justify-content-around align-items-stretch text-center">
      <p className="fs-4">
        El precio de venta para la propiedad ubicada en
        <br/>
        <strong className="fst-italic fs-3" >{ generalInfo.address }</strong>
        <br />
        tiene un precio estimado de
        <br />
      </p>
      <p className="fs-1">$ {formatCurrency(appraisal)}</p>
      <div className="d-flex flex-column align-items-md-center gap-2">
        <PDFDownloadLink
          document={
            <PdfReport
              data={generalInfo}
              appraisal={appraisal}
              sqMeterPrice={squareMeterPrice}
              mapImageUrl={mapImageUrl}
              zipCode={zipCode}
            />
          }
          fileName={`Reporte_Avaluo_${generalInfo.username}.pdf`}
          className="bg-secondary text-white text-decoration-none p-2 rounded shadow"
        >
          {({ loading }) => (loading ? "Generando..." : "Descargar Informe")}
        </PDFDownloadLink>
        <button onClick={onReset} className="btn btn-success text-secondary shadow">
          Nuevo Avalúo
        </button>
      </div>
    </form>
  );
}

export default ResultsForm;
