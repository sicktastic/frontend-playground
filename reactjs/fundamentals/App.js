import React from 'react';
import ReactDOM from 'react-dom'

// Lifecycle: Mounting Basics
class App extends React.component {
  constructor() {
    super();
    this.state = { val: 0 }
  }
}

// END Lifecycle: Mounting Basics

// class App extends React.component {
//   construtor() {
//     super();
//     this.state = {
//       txt: "This is the state txt",
//       cat: 0
//     }
//   }

//   update(e) {
//     this.setState({txt: e.target.value})
//   }

//   render() {
//     return (
//       <div>
//         <input type="text"
//           onChange={this.update.bind(this)} />
//         <h1>{this.state.txt}</h1>
//       </div>
//     )
//   }
// }

// class App extends React.component {
//   render() {
//     return <Button> i <Heart /> React</Button>
//   }
// }

// class Button extends React.component {
//   render() {
//     return <button>{this.props.chilren}</button>
//   }
// }

// const Heart = () => <span className="glyphicon glyphicon-heart"></span>

// export default App
