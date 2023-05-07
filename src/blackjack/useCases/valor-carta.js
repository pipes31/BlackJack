/**
 *Obtener el valor de La Carta
 * @param {String} carta Recibe el tipo de  carta como  string Ejemplo Carta: C
 * @returns {Number} Retorna el valor de la carta del 2 al 11
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
