const getData = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data.results[0].email);
  } catch (error) {
    console.log('Fehler:', error.message);
  }
};

getData();
