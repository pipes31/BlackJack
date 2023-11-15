import { pedirCarta } from "./";
import { valorCarta } from "./";

/**
 *
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora elementos HTML para mostrar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
  if (!puntosHTML) throw new Error("Argumentos PuntosHTML son necesarios");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nobody Wins :(");
    } else if (puntosMinimos > 21) {
      alert("Dealer wins");
    } else if (puntosComputadora > 21) {
      alert("Player wins");
    } else {
      alert("Dealer Wins");
    }
  }, 100);
};
