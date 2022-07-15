// Beispiel eines Objekts
const kim = {
  firstName: 'Kim',
  lastName: 'Schmidt',
  getFullName: function () {
    const name = `${this.firstName} ${this.lastName}`;
    return name;
  },
};

// Klassen:
// - Beschreiben den Aufbau von Objekten gleicher Art
// - Erleichtern die Objekterstellung
// - Sammlungen von Eigenschaften und Methoden (Verhalten)
class Person {
  getFullName() {
    const name = `${this.firstName} ${this.lastName}`;
    return name;
  }

  setLastName(newLastName) {
    this.lastName = newLastName;
  }
}
