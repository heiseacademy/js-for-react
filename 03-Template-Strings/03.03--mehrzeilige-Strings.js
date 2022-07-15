/*
  Kim Schmidt
  Hauptstr. 100
  12345 Neustadt
*/

// Problem:
// Stringkonkatenation mit + ist umständlich und fehleranfällig

// Beispiel 1: Einrückung, Leerzeichen, mehrere Zeilen usw.
// const address = 'Kim Schmidt \nHaupstr. 100 \n12345 Neustadt';
// console.log(address);

// Template-Strings mit `...`
// --> Leerzeichen/Zeilenumbrüche bleiben erhalten
const address = `Kim Schmidt
Hauptstr. 100
12345 Neustadt`;
console.log(address);
