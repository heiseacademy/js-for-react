import { useState } from 'react';

export default function Counter(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>COUNT</button>
    </div>
  );
}

// import { Component } from 'react';

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   render() {
//     const { counter } = this.state;
//     return (
//       <div>
//         <h1>{counter}</h1>
//         <button
//           onClick={() => this.setState({ counter: counter + 1 })}
//         >
//           COUNT
//         </button>
//       </div>
//     );
//   }
// }
