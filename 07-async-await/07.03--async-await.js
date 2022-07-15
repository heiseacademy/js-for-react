async function getData() {
  // fetch erst ab NodeJS 18 !
  // mit async/await
  // 1 - Webzugriff:
  const response = await fetch('https://randomuser.me/api/');
  // 2 - JSON-Daten:
  const data = await response.json();
  // Daten weiterverarbeiten
  console.log(data.results[0].email);

  // fetch('https://randomuser.me/api/')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.results[0].email))
  //   .catch((error) => console.log('Fehler:', error.message));
}

getData();
