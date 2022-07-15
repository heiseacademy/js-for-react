// Objekt
const address = {
  firstName: 'Kim',
  lastName: 'Schmidt',
  street: 'Hauptstr.',
  houseNr: 100,
  zipCode: 12345,
  city: 'Neustadt',
};

function printAddress({ firstName, lastName, country = 'Unknown' }) {
  // Destrukturierung: relevante Eigenschaften
  // --> Funktionsparameter wird destrukturiert

  console.log(firstName);
  console.log(lastName);
  console.log(country);
}

printAddress(address);
