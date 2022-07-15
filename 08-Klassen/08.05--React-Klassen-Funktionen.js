import { Component } from 'react';
// Alternative1: import React from 'react';

// Klassen-Komponenten sind Subklassen von React.Component
// Alternative1:
// export default class Counter extends React.Component {
export default class Counter extends Component {
  // Alternative2 (für den initialen Zustand anstatt Konstruktor)
  // state = { counter: 0 };
  constructor(props) {
    super(props);
    this.state = { counter: 0 }; // initialer Zustand
  }

  // render: liefert JSX zur Darstellung der Komponente im UI
  // render wird automatisch bei Änderung von state/props aufgerufen
  // Bemerkung: Zugriff auf props mit this.props...
  render() {
    // this.state: Zugriff auf den Zustand
    const { counter } = this.state;
    // this.setState: Funktion zur Änderung des states/Zustands
    return (
      <div>
        <h1>{counter}</h1>
        <button
          onClick={() => this.setState({ counter: counter + 1 })}
        >
          COUNT
        </button>
      </div>
    );
  }
}
