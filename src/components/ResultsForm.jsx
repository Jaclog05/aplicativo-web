import React, { useEffect, useContext } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfReport from "./pdfReport/PdfReport";
import { AppraisalsContext } from "../appraisalContext";

function ResultsForm({ onReset }) {
  const { VITE_API_BASE_URL } = import.meta.env;
  const {appraisal, generalInfo, squareMeterPrice, mapImageUrl, zipCode} = useContext(AppraisalsContext)

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
    <form className="d-flex flex-column justify-content-around align-items-stretch text-center">
      <p className="fs-4">
        El precio de venta para la propiedad ubicada en
        <br/>
        <strong className="fst-italic fs-3" >
          {generalInfo.address}
        </strong>
        <br />
        tiene un precio estimado de
        <br />
      </p>
      <p className="fs-1">$ {formatPrice(appraisal)}</p>
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
