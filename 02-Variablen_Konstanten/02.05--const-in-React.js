// Beispiel in React: UserProfile
function UserProfile(props) {
  const name = props.name;
  const age = props.age;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}
