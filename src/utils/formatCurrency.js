export function formatCurrency(value) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}