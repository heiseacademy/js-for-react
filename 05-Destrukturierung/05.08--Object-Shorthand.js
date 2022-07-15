// Objekt
const address = {
  firstName: 'Kim',
  lastName: 'Schmidt',
  street: 'Hauptstr.',
  houseNr: 100,
  zipCode: 12345,
  city: 'Neustadt',
};

// Destrukturierung: Wert einer Eigenschaft --> Konstante/Variable
// Name der Konstanten muss dem Namen der Objekteigenschaft gleichen
const { lastName, zipCode, city, firstName } = address;

// Object shorthand
const address2 = {
  firstName,
  lastName,
  zipCode,
  city,
};

// Zeile 15-20 entspricht folgendem:
// const address2 = {
//   firstName: firstName,
//   lastName: lastName,
//   zipCode: zipCode,
//   city: city,
// };

console.log(address2);
