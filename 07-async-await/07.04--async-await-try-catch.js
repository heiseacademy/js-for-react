async function getData() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data.results[0].email);
  } catch (error) {
    console.log('Fehler:', error.message);
  }

  // fetch('https://randomuser.me/api/')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.results[0].email))
  //   .catch((error) => console.log('Fehler:', error.message));
}

getData();
