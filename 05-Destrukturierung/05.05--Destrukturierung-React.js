// Beispiel in React: UserProfile
// props: Object
// props -> {firstName: '', ...}
const UserProfile = ({
  firstName = 'Kim',
  lastName = 'Schmidt',
  age = 32,
}) => {
  const name = `${firstName} ${lastName}`;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <button onClick={() => alert(`Hallo, ${name}!`)}>TEST</button>
    </div>
  );
};

export default UserProfile;
