/**
 * Obtener  La carta
 * @param {Array<String>} deck  Recibe el Deck
 * @returns {String} Retorna el Tipo de carta
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error("No card Left in the Deck");
  }
  const carta = deck.pop();
  return carta;
};
