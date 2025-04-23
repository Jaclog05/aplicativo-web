import { useContext, useEffect } from "react";
import { AppraisalsContext } from "../appraisalContext";

export function useSubmitAppraisal() {
  const { VITE_API_BASE_URL } = import.meta.env;
  const { generalInfo, appraisal } = useContext(AppraisalsContext);

  useEffect(() => {

    if (appraisal == null) return;

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
          headers: { "Content-Type": "application/json" },
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
    postAppraisal();
  }, [])
}

