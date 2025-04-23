import { useState } from "react";

const initialFormState = {
  coordinates: null,
  status: "",
  areaDisplay: "",
  rawArea: "",
  priceDisplay: "",
  rawPrice: ""
}

export function useGeneralInfoForm() {
  const [formData, setFormData] = useState(initialFormState)

  const handleFieldChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))
  }

  const handleNumberFieldChange = (rawField, displayField) => (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    const numValue = parseInt(digits || 0, 10);
    setFormData((prev) => ({
      ...prev,
      [rawField]: numValue,
      [displayField]: numValue.toLocaleString("es-CO")
    }))
  }

  const setField = (field) => (value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    formData,
    handleFieldChange,
    handleNumberFieldChange,
    setField
  }
}


