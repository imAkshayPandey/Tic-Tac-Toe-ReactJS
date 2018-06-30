import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Gae">
        <Game />
      </div>
    );
  }
}
class Square extends React.Component {
  render() {
    return (
      <button className="square">{this.props.value}</button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.renderSquare(1)},
         {this.renderSquare(2)},
         {this.renderSquare(3)},
         </div>
        <div className="row">
          {this.renderSquare(4)},
          {this.renderSquare(5)},
          {this.renderSquare(6)},
         </div>
        <div className="row">
          {this.renderSquare(7)},
          {this.renderSquare(8)},
          {this.renderSquare(9)},
         </div>
      </div>

    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="Game">
        <Board />
      </div>

    );
  }
}
export default App;
