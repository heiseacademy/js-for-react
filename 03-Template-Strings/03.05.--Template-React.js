// Beispiel in React: UserProfile
function UserProfile(props) {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const name = `${firstName} ${lastName}`;
  const age = props.age;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}
