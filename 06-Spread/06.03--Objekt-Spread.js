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

// Spread-Operator: ...
const person = { ...address, ...contact, country: 'Germany' };
console.log(person);
console.log(address);
