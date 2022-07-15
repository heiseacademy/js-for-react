// Beispiel in React: UserProfile
const UserProfile = (props) => {
  const firstName = props.firstName || 'Kim';
  const lastName = props.lastName || 'Schmidt';
  const name = `${firstName} ${lastName}`;
  const age = props.age || 32;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <button onClick={() => alert(`Hallo, ${name}!`)}>TEST</button>
    </div>
  );
};

export default UserProfile;
