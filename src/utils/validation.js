export function validateGeneralInfo({ area, price }) {
  const numericArea = parseInt(area, 10);
  const numericPrice = parseInt(price, 10);

  if (numericArea < 30) {
    alert("El área debe ser al menos 30 m²");
    return false;
  }
  
  if (numericPrice < 10000000) {
    alert("El precio debe ser al menos 10.000.000 COP");
    return false;
  }
  
  return true;
}