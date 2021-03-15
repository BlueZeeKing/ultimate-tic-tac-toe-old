import React from 'react';
import './App.css';
import './Toggle.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { settings: false }

    this.openSettings = this.openSettings.bind(this)
    this.closeSettings = this.closeSettings.bind(this)
  }

  openSettings() {
    this.setState({ settings: true })
  }

  closeSettings() {
    this.setState({ settings: false })
  }

  render () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    let settings;
    if (this.state.settings) {
      settings = <Settings close={this.closeSettings}/>
    }
    
    return (
      <div className="w-screen h-screen">
        <Header onClick={this.openSettings} />
        {settings}
        <div className="flex flex-col text-center h-full w-full">
          <div className="flex-grow"></div>
          <div className="flex flex-row text-center w-full">
            <div className="flex-grow"></div>
            <div className="w-90 h-90">
              <Game />
            </div>
            <div className="flex-grow"></div>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    )
  }
}

function Header(props) {
  return (
    <div className="w-screen absolute top-0 left-0 bg-blue-500">
      <div className="relative">
        <button className="material-icons transition-all duration-200 cursor-pointer absolute top-0 left-0 m-4 text-4xl md:text-5xl lg:text-6xl text-white outline-none focus:outline-none" onClick={props.onClick}>settings</button>
        <h1 className="w-full text-center py-4 font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue text-white">Ultimate TicTacToe</h1>
      </div>
    </div>
  )
}

class Settings extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      color: '#505050',
      toggle: true
    }

    this.handleColor = this.handleColor.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.close = this.close.bind(this)
  }

  handleColor(e) {
    this.setState({
      color: e.target.value
    })
  }

  handleToggle(e) {
    this.setState({
      toggle: e.target.checked
    })

    console.log(e.target.checked)

    if (!e.target.checked) {
      document.documentElement.style.setProperty('--highlight-color', 'rgba(255, 255, 255, 0)');
    } else {
      document.documentElement.style.setProperty('--highlight-color', this.state.color);
    }
  }

  close() {
    document.documentElement.style.setProperty('--highlight-color', this.state.color);

    this.props.close()
  }

  render() {
    return (
      <div className="w-4/5 md:w-1/2 lg:w-1/3 h-screen absolute top-0 left-0 shadow bg-white p-2 z-50">
        <div className="relative">
          <span className="float-left inline-block align-middle m-1">Active Square Color: </span>
          <label style={{ backgroundColor: this.state.color }} className="m-1 p-1 w-16 h-6 rounded border border-gray-200 inline-block" >
            <input className="opacity-0 w-16 h-6" type="color" value={this.state.color} onChange={this.handleColor} disabled={!this.state.toggle}/>
          </label>

          <br/>

          <span className="height float-left inline-block align-middle m-1">Active Square Highlight: </span>
          <label className="switch inline-block m-1 h-6">
            <input type="checkbox" checked={this.state.toggle} onChange={this.handleToggle} />
            <span className="slider round"></span>
          </label>

          <button className="material-icons transition-all duration-200 cursor-pointer absolute top-0 right-0 m-1 text-xl text-gray-500 focus:text-black outline-none focus:outline-none" onClick={this.close}>close</button>
        </div>
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
      currentTurn: 'X',
      msg: 'It\'s X\'s Turn'
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
      state.msg = `The winner is ${winner}`
    } else if (open === false) {
      state.boardStatus[board] = 'f'
      state.msg = 'Tie Game'
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

    this.setState(state)
  }

  render() {
    let board = []

    this.state.board.forEach((element, index) => {
      board.push(<Board key={index} index={index} active={this.state.active === index || this.state.active === 10} currentTurn={this.state.currentTurn} doneHandler={this.doneHandler} board={element} />)
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
      console.log(this.state, this.hasWon())
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

    //console.log(this.hasWon())
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

export default App;