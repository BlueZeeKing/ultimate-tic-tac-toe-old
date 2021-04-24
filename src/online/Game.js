import React from 'react';
import './Online.css';
import Header from "./Header.js";

function GameView(props) {
  return (
      <div className = "w-screen h-screen" > // create a div the size of the screen
        <Header /> // the header
        <div className="flex flex-col text-center h-full w-full"> // use flex to position
          <div className="flex-grow"></div>
          <div className="flex flex-row text-center w-full">
            <div className="flex-grow"></div>
            <div className="w-90 h-90"> // container for the game
              <Game socket={props.socket} user={props.user}/> // pass the socket and users to the game
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
      board: [['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']], // hold the board data
      boardStatus: ['', '', '', '', '', '', '', '', ''], // hold the status of each board
      active: 10, // the active square 10 for all 9 for none
      currentTurn: 'X', // the current player
      msg: 'It\'s X\'s Turn' // the msg to display at the bottom
    }
  }

  componentDidMount() { // after the component is rendered
    console.log('mounted')
    this.doneHandler = this.doneHandlerUnbound.bind(this); // bind the done handler

    this.props.socket.on('update', function (raw) { // on an update message
      let state = JSON.parse(raw)
      this.setState(state) // set the state to the new data
    }.bind(this))

    this.setState({}) // update everything
  }

  isFull(state = this.state) {
    return state.boardStatus.filter(function (item) { return item === 'f' }).length === 9 // filter the array for all the items that are full(f) and if there are 9 of them the board is full
  }

  hasWon(state = this.state) {
    if (state.boardStatus[0] !== '' && state.boardStatus[0] !== 'f' && state.boardStatus[0] === state.boardStatus[1] && state.boardStatus[0] === state.boardStatus[2]) { // if the first square is not empty or full and it is equal to the other squares in the first row return the winner
      return state.boardStatus[0]
    } else if (state.boardStatus[3] !== '' && state.boardStatus[3] !== 'f' && state.boardStatus[3] === state.boardStatus[4] && state.boardStatus[3] === state.boardStatus[5]) { // same as first
      return state.boardStatus[3]
    } else if (state.boardStatus[6] !== '' && state.boardStatus[6] !== 'f' && state.boardStatus[6] === state.boardStatus[7] && state.boardStatus[6] === state.boardStatus[8]) { // same as first
      return state.boardStatus[6]
    } else if (state.boardStatus[0] !== '' && state.boardStatus[0] !== 'f' && state.boardStatus[0] === state.boardStatus[3] && state.boardStatus[0] === state.boardStatus[6]) { // same as first
      return state.boardStatus[0]
    } else if (state.boardStatus[1] !== '' && state.boardStatus[1] !== 'f' && state.boardStatus[1] === state.boardStatus[4] && state.boardStatus[1] === state.boardStatus[7]) { // same as first
      return state.boardStatus[1]
    } else if (state.boardStatus[2] !== '' && state.boardStatus[2] !== 'f' && state.boardStatus[2] === state.boardStatus[5] && state.boardStatus[2] === state.boardStatus[8]) { // same as first
      return state.boardStatus[2]
    } else if (state.boardStatus[0] !== '' && state.boardStatus[0] !== 'f' && state.boardStatus[0] === state.boardStatus[4] && state.boardStatus[0] === state.boardStatus[8]) { // same as first
      return state.boardStatus[0]
    } else if (state.boardStatus[2] !== '' && state.boardStatus[2] !== 'f' && state.boardStatus[2] === state.boardStatus[4] && state.boardStatus[2] === state.boardStatus[6]) { // same as first
      return state.boardStatus[2]
    } else { // otherwise return blank
      return ''
    }
  }

  doneHandlerUnbound(board, index, winner, open, boardData) {
    let state = this.state // get a copy of the state

    state.board[board] = boardData // update the board data

    if (open === false && winner !== '') { // if the square is closed and there is a winner
      state.boardStatus[board] = winner // set the status to the winner
    } else if (open === false) {
      state.boardStatus[board] = 'f' // otherwise set the status to full
    }

    if (state.currentTurn === 'X') { // change the turn
      state.currentTurn = 'O'
    } else {
      state.currentTurn = 'X'
    }

    state.msg = `It's ${state.currentTurn}'s Turn` // set the msg

    state.active = index // set the new active square

    if (state.boardStatus[index] !== '') { // if the new square is full
      state.active = 10 // set the active square to be all squares
    }

    console.log('winner',this.hasWon(state))

    if (this.hasWon(state) !== '' && this.hasWon(state) !== 'f') { // if some one has won
      state.active = 9 // close the game
      state.msg = `The winner is ${this.hasWon(state)}` // set the msg
    } else if (this.isFull(state)) { // if the game is a tie
      state.active = 9 // close the game
      state.msg = 'Tie Game' //set the msg to tie game
    }
    this.setState(state) // update the state
    this.props.socket.emit('update', JSON.stringify(this.state)) // send a tie game msg
  }

  render() {
    let board = [] // create an empty list for the boards

    this.state.board.forEach((element, index) => {
      board.push(<Board key={index} index={index} active={(this.state.active === index || this.state.active === 10) && this.state.currentTurn === this.props.user && this.state.boardStatus[index] === ''} currentTurn={this.state.currentTurn} doneHandler={this.doneHandler} board={element} />) // add a board
    });

    return (
      <div className="w-full h-full border-2 border-gray-800 flex flex-row flex-wrap">
        {board} 
        <h3 className="text-2xl text-center font-bold w-full my-2">{this.state.msg}</h3> // create a heading with the msg
      </div>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: props.board, // set the data of the board to be the data that was sent in the props
    }

    this.state.open = !this.isFull() && (this.hasWon() === '') // if the board is not full and the winner is no one set open to true

    this.handleClick = this.handleClick.bind(this); // bind handle click
  }

  componentDidUpdate(prevProps) {
    if (this.props.board !== prevProps.board) {
      this.setState({board: this.props.board}) // when new board data is sent update the board
    }
  }

  isFull (state = this.state) {
    return state.board.filter(function (item) { return item === '' }).length === 0 // check if there are eny empty squares
  }

  hasWon(state = this.state) {
    if (state.board[0] !== '' && state.board[0] === state.board[1] && state.board[0] === state.board[2]) { // if all the squares in the top row are the same and are not empty return the winner
      return state.board[0]
    } else if (state.board[3] !== '' && state.board[3] === state.board[4] && state.board[3] === state.board[5]) { // same
      return state.board[3]
    } else if (state.board[6] !== '' && state.board[6] === state.board[7] && state.board[6] === state.board[8]) {
      return state.board[6]
    } else if (state.board[0] !== '' && state.board[0] === state.board[3] && state.board[0] === state.board[6]) {
      return state.board[0]
    } else if (state.board[1] !== '' && state.board[1] === state.board[4] && state.board[1] === state.board[7]) {
      return state.board[1]
    } else if (state.board[2] !== '' && state.board[2] === state.board[5] && state.board[2] === state.board[8]) {
      return state.board[2]
    } else if (state.board[0] !== '' && state.board[0] === state.board[4] && state.board[0] === state.board[8]) {
      return state.board[0]
    } else if (state.board[2] !== '' && state.board[2] === state.board[4] && state.board[2] === state.board[6]) {
      return state.board[2]
    } else {
      return ''
    }
  }

  handleClick (e) {
    if (this.props.active && this.state.open && this.state.board[e] === '') { // if the square is open and the square is empty
      let state = this.state // get a copy of the state

      state.board[e] = this.props.currentTurn // set the position of the board
      state.open = !this.isFull(state) && (this.hasWon(state) === '') // check if anyone has won or a tie has occured
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