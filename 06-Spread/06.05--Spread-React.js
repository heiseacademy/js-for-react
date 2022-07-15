const Card = ({ firstName, lastName, age }) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Alter: {age}</p>
    </div>
  );
};

const UserProfile = (props) => {
  return (
    <div>
      <h1>Profil</h1>
      <Card {...props} />
    </div>
  );
};

const App = () => (
  <UserProfile firstName="Kim" lastName="Schmidt" age={32} />
);

export default App;
