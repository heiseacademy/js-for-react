/*
  Kim Schmidt
  Hauptstr. 100
  12345 Neustadt
*/

// Problem:
// Stringkonkatenation mit + ist umständlich und fehleranfällig

// Beispiel 1: Einrückung, Leerzeichen, mehrere Zeilen usw.
const address = 'Kim Schmidt \nHaupstr. 100 \n12345 Neustadt';
console.log(address);

// Beispiel 2: Strings aus Konstanten/Variablen zusammensetzen
const firstName = 'Kim';
const lastName = 'Schmidt';
const street = 'Hauptstr.';
const houseNr = 100;
const zipCode = 12345;
const city = 'Neustadt';

const line1 = firstName + ' ' + lastName + '\n';
const line2 = street + ' ' + houseNr + '\n';
const line3 = zipCode + ' ' + city + '\n';
const address2 = line1 + line2 + line3;
console.log(address2);
