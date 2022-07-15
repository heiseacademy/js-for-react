function getData() {
  // fetch erst ab NodeJS 18 !
  // Verwendung mit Promises
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => console.log(data.results[0].email))
    .catch((error) => console.log('Fehler:', error.message));
}

getData();
