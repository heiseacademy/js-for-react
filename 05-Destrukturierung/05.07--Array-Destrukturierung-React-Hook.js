import { useState } from 'react';

// Beispiel in React: UserProfile
const UserProfile = ({
  firstName = 'Kim',
  lastName = 'Schmidt',
  age = 32,
}) => {
  // useState: Funktion, die ein Array liefert:
  // return [stateVariable, stateChangeFunction]
  // Array wird destrukturiert
  const [counter, setCounter] = useState(0); // useState --> Array

  const name = `${firstName} ${lastName}`;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <button onClick={() => alert(`Hallo, ${name}!`)}>TEST</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>COUNT</button>
    </div>
  );
};

export default UserProfile;
