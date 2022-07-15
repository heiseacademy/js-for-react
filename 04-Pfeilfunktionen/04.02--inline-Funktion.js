// Array mit Zahlen
const list = [4, 21, 54];

// Erstelle Array mit doppelten Zahlen aus list
// map: „Abbildung“
// callback-Funktion wird für jedes Element aus list aufgerufen
//  4 ->  4 * 2 =   8
// 21 -> 21 * 2 =  42
// 54 -> 54 * 2 = 108
// erstellt neues Array, das die Ergebnisse enthält
// --> [ 8, 42, 108 ]
// Siehe Array in Mozilla Developer Network (MDN, https://mdn.dev)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const listDouble = list.map(function (num) {
  const result = num * 2;
  return result;
});

console.log(listDouble);
