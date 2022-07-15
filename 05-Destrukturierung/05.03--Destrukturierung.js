// Objekt
const address = {
  firstName: 'Kim',
  lastName: 'Schmidt',
  street: 'Hauptstr.',
  houseNr: 100,
  zipCode: 12345,
  city: 'Neustadt',
};

// Zugriff auf die Objekteigenschaften
// const firstName = address.firstName;
// const lastName = address.lastName;
// const zipCode = address.zipCode;
// const city = address.city;

// Destrukturierung: Wert einer Eigenschaft --> Konstante/Variable
// funktioniert nur dann, wenn
// Name Konstante/Variable == Name Objekteigenschaft
// folgende Zeile entspricht Zeilen 12-15
const { firstName, lastName, zipCode, city } = address;

console.log(firstName);
