/**
 *
 * @param {String} carta Recibe la Carta
 * @returns Una imagen en Formato HTML
 */
export const crearCartaHTML = (carta) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta;
};
