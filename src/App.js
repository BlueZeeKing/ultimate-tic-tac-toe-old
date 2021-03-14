import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <Board />
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: ['', '', '', '', '', '', '', '', '']
    }
  }

  isFull () {
    return this.state.board.filter(function (item) { return item === 'n' }).length === 0
  }

  hasWon() {
    if (this.state.board[0] == this.state.board[1] && this.state.board[0] == this.state.board[2]) {
      return this.state.board[0]
    } else if (this.state.board[3] == this.state.board[4] && this.state.board[3] == this.state.board[5]) {
      return this.state.board[3]
    } else if (this.state.board[6] == this.state.board[7] && this.state.board[6] == this.state.board[8]) {
      return this.state.board[6]
    } else if (this.state.board[0] == this.state.board[3] && this.state.board[0] == this.state.board[6]) {
      return this.state.board[0]
    } else if (this.state.board[1] == this.state.board[4] && this.state.board[1] == this.state.board[7]) {
      return this.state.board[1]
    } else if (this.state.board[2] == this.state.board[5] && this.state.board[2] == this.state.board[8]) {
      return this.state.board[2]
    } else if (this.state.board[0] == this.state.board[4] && this.state.board[0] == this.state.board[8]) {
      return this.state.board[0]
    } else if (this.state.board[2] == this.state.board[4] && this.state.board[2] == this.state.board[6]) {
      return this.state.board[2]
    } else {
      return ''
    }
  }

  handleClick (e) {
    console.log(e)
  }

  render () {
    let board = []

    this.state.board.forEach((element, index) => {
      board.push(<Square key={index} onClick={this.handleClick} value={element}></Square>)
    });

    return (
      <div>
        {board}
      </div>
    )
  }
}

function Square (props) {
  return (
    <p className="square" onClick={props.onClick}>{props.value}</p>
  )
}

export default App;
