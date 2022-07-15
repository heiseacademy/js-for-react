// Array mit Zahlen
const list = [4, 21, 54];

// Pfeilfunktion ohne Parameter
const example = () => {
  // code ...
  const result = 'test';
  return result;
};

// Aufruf der Pfeilfunktion
example();

// Pfeilfunktionen
const listDouble = list.map((num) => {
  const result = num * 2;
  return result;
});

console.log(listDouble);
