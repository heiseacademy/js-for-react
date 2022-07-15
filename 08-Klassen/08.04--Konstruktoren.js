// Beispiel eines Objekts
const kimObject = {
  firstName: 'Kim',
  lastName: 'Schmidt',
  getFullName: function () {
    const name = `${this.firstName} ${this.lastName}`;
    return name;
  },
};

// Klassen:
// - Beschreiben den Aufbau von Objekten gleicher Art
// - Erleichtern die Objekterstellung (durch Konstruktoren)
// - Sammlungen von Eigenschaften und Methoden (Verhalten)
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    const name = `${this.firstName} ${this.lastName}`;
    return name;
  }

  setLastName(newLastName) {
    this.lastName = newLastName;
  }
}

// Objekte mit Klasse Person erzeugen:
const kim = new Person('Kim', 'Schmidt'); // --> constructor

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// - Vererbung (extends)
// - Statische Eigenschaften und Methoden (static)
// - private Eigenschaften und Methoden
// - getter/setter (prototype methods)
