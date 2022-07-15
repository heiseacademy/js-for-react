const contact = {
  firstName: 'Kim',
  lastName: 'Schmidt',
  email: 'kim@example.com',
  mobile: '+49123456789',
};

// Spread/Rest mit Destrukturierung
// email und den Rest der Eigenschaften
const { email, ...rest } = contact;
console.log(email);
console.log(rest);

// Rest-Parameter in Funktion
// --> mit beliebig vielen Argumenten aufrufbar
function printNumbers(...list) {
  list.forEach((num) => console.log(num));
}
printNumbers(1, 2, 3);
printNumbers(10, 20, 30, 40);
