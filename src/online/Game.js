import React from 'react';
import './Online.css';
import Header from "./Header.js";

function GameView(props) {
  return(
      <div className = "w-screen h-screen" >
        <Header />
        <div className="flex flex-col text-center h-full w-full">
          <div className="flex-grow"></div>
          <div className="flex flex-row text-center w-full">
            <div className="flex-grow"></div>
            <div className="w-90 h-90">
              <Game socket={props.socket} user={props.user}/>
            </div>
            <div className="flex-grow"></div>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    )
}

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [['X', 'X', 'X', '', '', '', '', '', ''], ['X', 'X', 'X', '', '', '', '', '', ''], ['X', 'X', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']],
      boardStatus: ['X', 'X', '', '', '', '', '', '', ''],
      active: 10,
      currentTurn: 'X',
      msg: 'It\'s X\'s Turn'
    }

    this.doneHandler = this.doneHandler.bind(this);

    this.props.socket.on('update', function (raw) {
      let state = JSON.parse(raw)
      this.setState(state)
    }.bind(this))
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
    console.log(board, index, winner, open, boardData)
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

    state.msg = `It's ${state.currentTurn}'s Turn`

    state.active = index

    if (state.boardStatus[index] !== '') {
      state.active = 10
    }

    if (this.hasWon(state) !== '' && this.hasWon(state) !== 'f') {
      state.active = 9
      state.msg = `The winner is ${this.hasWon(state)}`
    } else if (this.isFull(state)) {
      state.active = 9
      state.msg = 'Tie Game'
    }

    this.setState(state)
    this.props.socket.emit('update', JSON.stringify(this.state))
  }

  render() {
    let board = []

    this.state.board.forEach((element, index) => {
      board.push(<Board key={index} index={index} active={(this.state.active === index || this.state.active === 10) && this.state.currentTurn === this.props.user} currentTurn={this.state.currentTurn} doneHandler={this.doneHandler} board={element} />)
    });

    return (
      <div className="w-full h-full border-2 border-gray-800 flex flex-row flex-wrap">
        {board}
        <h3 className="text-2xl text-center font-bold w-full my-2">{this.state.msg}</h3>
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

  componentDidUpdate(prevProps) {
    if (this.props.board !== prevProps.board) {
      this.setState({board: this.props.board})
    }
  }

  isFull () {
    return this.state.board.filter(function (item) { return item === '' }).length === 0
  }

  hasWon() {
    if (this.state.board[0] !== '' && this.state.board[0] === this.state.board[1] && this.state.board[0] === this.state.board[2]) {
      return this.state.board[0]
    } else if (this.state.board[3] !== '' && this.state.board[3] === this.state.board[4] && this.state.board[3] === this.state.board[5]) {
      return this.state.board[3]
    } else if (this.state.board[6] !== '' && this.state.board[6] === this.state.board[7] && this.state.board[6] === this.state.board[8]) {
      return this.state.board[6]
    } else if (this.state.board[0] !== '' && this.state.board[0] === this.state.board[3] && this.state.board[0] === this.state.board[6]) {
      return this.state.board[0]
    } else if (this.state.board[1] !== '' && this.state.board[1] === this.state.board[4] && this.state.board[1] === this.state.board[7]) {
      return this.state.board[1]
    } else if (this.state.board[2] !== '' && this.state.board[2] === this.state.board[5] && this.state.board[2] === this.state.board[8]) {
      return this.state.board[2]
    } else if (this.state.board[0] !== '' && this.state.board[0] === this.state.board[4] && this.state.board[0] === this.state.board[8]) {
      return this.state.board[0]
    } else if (this.state.board[2] !== '' && this.state.board[2] === this.state.board[4] && this.state.board[2] === this.state.board[6]) {
      return this.state.board[2]
    } else {
      return ''
    }
  }

  handleClick (e) {
    if (this.props.active && this.state.open && this.state.board[e] === '') {
      let state = this.state

      state.board[e] = this.props.currentTurn
      state.open = !this.isFull() && (this.hasWon() === '')
      this.setState(state)

      this.props.doneHandler(this.props.index, e, this.hasWon(), state.open, state.board)

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
          <p className="text-center cursor-default text-8xl leading-none align-middle opacity-70">{this.hasWon()}</p>
          <div className="flex-grow"></div>
        </div>
      )
    }

    let classes = "w-1/3 h-1/3 border-2 border-gray-800 flex-board relative transition-all duration-200 highlight-default"

    if (this.isFull() || this.hasWon() !== '') {
      classes = classes + " bg-gray-300"
    }
    if (this.props.active === true && this.state.open) {
      classes = classes + " highlight"
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
      <p className="text-center cursor-default leading-none align-middle text-3xl">{props.value}</p>
      <div className="flex-grow"></div>
    </div>
  )
}

export default GameView