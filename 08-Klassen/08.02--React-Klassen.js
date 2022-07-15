// Komponente als Funktion
function UserProfile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}

// Komponente als Klasse (entspricht UserProfile)
import { Component } from 'react';
class UserProfile2 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.age}</p>
      </div>
    );
  }
}
