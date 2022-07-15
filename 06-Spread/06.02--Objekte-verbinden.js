const address = {
  firstName: 'Kim',
  lastName: 'Schmidt',
  street: 'Hauptstr.',
  houseNr: 100,
  zipCode: 12345,
  city: 'Neustadt',
};

const contact = {
  firstName: 'Kim',
  lastName: 'Schmidt',
  email: 'kim@example.com',
  mobile: '+49123456789',
};

// Object.assign ist etwas umständlich:
// Dem Objekt im ersten Parameter werden die Eigenschaften
// der Objekte in den folgenden Parameter zugewiesen.
// Daher verwenden wir hier {} als ersten Parameter.
const person = Object.assign({}, address, contact);
console.log(person);
console.log(address);
