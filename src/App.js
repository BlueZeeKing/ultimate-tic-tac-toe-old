import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="w-72 h-72">
        <Game />
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']],
      boardStatus: ['', '', '', '', '', '', '', '', ''],
      active: 10,
      currentTurn: 'X'
    }

    this.doneHandler = this.doneHandler.bind(this);
  }

  isFull() {
    return !(this.state.boardStatus.filter(function (item) { return item === 'f' }).length === 9)
  }

  hasWon() {
    if (this.state.boardStatus[0] === this.state.boardStatus[1] && this.state.boardStatus[0] === this.state.boardStatus[2]) {
      return this.state.boardStatus[0]
    } else if (this.state.boardStatus[3] === this.state.boardStatus[4] && this.state.boardStatus[3] === this.state.boardStatus[5]) {
      return this.state.boardStatus[3]
    } else if (this.state.boardStatus[6] === this.state.boardStatus[7] && this.state.boardStatus[6] === this.state.boardStatus[8]) {
      return this.state.boardStatus[6]
    } else if (this.state.boardStatus[0] === this.state.boardStatus[3] && this.state.boardStatus[0] === this.state.boardStatus[6]) {
      return this.state.boardStatus[0]
    } else if (this.state.boardStatus[1] === this.state.boardStatus[4] && this.state.boardStatus[1] === this.state.boardStatus[7]) {
      return this.state.boardStatus[1]
    } else if (this.state.boardStatus[2] === this.state.boardStatus[5] && this.state.boardStatus[2] === this.state.boardStatus[8]) {
      return this.state.boardStatus[2]
    } else if (this.state.boardStatus[0] === this.state.boardStatus[4] && this.state.boardStatus[0] === this.state.boardStatus[8]) {
      return this.state.boardStatus[0]
    } else if (this.state.boardStatus[2] === this.state.boardStatus[4] && this.state.boardStatus[2] === this.state.boardStatus[6]) {
      return this.state.boardStatus[2]
    } else {
      return 'f'
    }
  }

  doneHandler(board, index, winner, open, boardData) {
    let state = this.state

    state.board[board] = boardData

    if (open === false && winner !== '') {
      state.boardStatus[board] = winner
    } else if (open === false) {
      state.boardStatus[board] = 'f'
    }

    if (state.currentTurn === 'X') {
      state.currentTurn = 'O'
    } else {
      state.currentTurn = 'X'
    }

    state.active = index

    if (state.boardStatus[index] !== '') {
      state.active = 10
    }

    this.setState(state)

    console.log(board, index, winner, open, board)
  }

  render() {
    let board = []

    this.state.board.forEach((element, index) => {
      board.push(<Board key={index} index={index} active={this.state.active === index || this.state.active === 10} currentTurn={this.state.currentTurn} doneHandler={this.doneHandler} board={element} />)
    });

    return (
      <div className="w-full h-full border-2 border-gray-800">
        {board}
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

      this.props.doneHandler(this.props.index, e, this.hasWon(), state.open, state.board)

      console.log(e)
    }
  }

  render () {
    let board = []

    this.state.board.forEach((element, index) => {
      board.push(<Square index={index} key={index} onClick={this.handleClick} value={element}></Square>)
    });

    let cover;

    if (this.hasWon() !== '') {
      cover = (
        <div className="w-full h-full absolute top-0 left-0 flex flex-col">
          <div className="flex-grow"></div>
          <p className="text-center cursor-default text-6xl leading-none align-middle opacity-50">{this.hasWon()}</p>
          <div className="flex-grow"></div>
        </div>
      )
    }

    let classes = "w-1/3 h-1/3 border-2 border-gray-800 float-left relative"

    if (this.isFull()) {
      classes = classes + " bg-gray-200"
    }

    return (
      <div className={classes}>
        {board}
        {cover}
      </div>
    )
  }
}

function Square (props) {
  return (
    <div className="w-1/3 h-1/3 border border-gray-400 flex flex-col float-left" onClick={function (e) { props.onClick(props.index) }}>
      <div className="flex-grow"></div>
      <p className="text-center cursor-default leading-none align-middle">{props.value}</p>
      <div className="flex-grow"></div>
    </div>
  )
}

export default App;