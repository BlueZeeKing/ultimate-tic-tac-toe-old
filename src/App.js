import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="w-72 h-72">
        <Board active={true} currentTurn={'x'} doneHandler={console.log} board={['', '', '', '', '', '', '', '', '']} />
      </div>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: props.board,
    }

    console.log(this.isFull())

    this.state.open = !this.isFull() && (this.hasWon() === '')

    this.handleClick = this.handleClick.bind(this);
  }

  isFull () {
    return this.state.board.filter(function (item) { return item === '' }).length === 0
  }

  hasWon() {
    if (this.state.board[0] === this.state.board[1] && this.state.board[0] === this.state.board[2]) {
      return this.state.board[0]
    } else if (this.state.board[3] === this.state.board[4] && this.state.board[3] === this.state.board[5]) {
      return this.state.board[3]
    } else if (this.state.board[6] === this.state.board[7] && this.state.board[6] === this.state.board[8]) {
      return this.state.board[6]
    } else if (this.state.board[0] === this.state.board[3] && this.state.board[0] === this.state.board[6]) {
      return this.state.board[0]
    } else if (this.state.board[1] === this.state.board[4] && this.state.board[1] === this.state.board[7]) {
      return this.state.board[1]
    } else if (this.state.board[2] === this.state.board[5] && this.state.board[2] === this.state.board[8]) {
      return this.state.board[2]
    } else if (this.state.board[0] === this.state.board[4] && this.state.board[0] === this.state.board[8]) {
      return this.state.board[0]
    } else if (this.state.board[2] === this.state.board[4] && this.state.board[2] === this.state.board[6]) {
      return this.state.board[2]
    } else {
      return ''
    }
  }

  handleClick (e) {
    if (this.props.active && this.state.open) {
      let state = this.state

      state.board[e] = this.props.currentTurn
      state.open = !this.isFull() && (this.hasWon() === '')

      this.setState(state)

      this.props.doneHandler(e, this.hasWon(), state.open, state.board)

      console.log(e)
    }
  }

  render () {
    let board = []

    this.state.board.forEach((element, index) => {
      board.push(<Square index={index} key={index} onClick={this.handleClick} value={element}></Square>)
    });

    return (
      <div className="w-1/3 h-1/3 border-2 border-gray-800">
        {board}
      </div>
    )
  }
}

function Square (props) {
  return (
    <div className="w-1/3 h-1/3 border border-gray-400 flex flex-col float-left" onClick={function (e) { props.onClick(props.index) }}>
      <div className="flex-grow"></div>
      <p className="text-center cursor-default">{props.value}</p>
      <div className="flex-grow"></div>
    </div>
  )
}

export default App;
