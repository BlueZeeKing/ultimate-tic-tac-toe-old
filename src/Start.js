import React from 'react';
import './App.css';
import Header from "./Header.js";

function StartView(props) {
  return(
    <div className = "w-screen h-screen" >
      <Header />
      <div className="flex flex-col text-center h-full w-full">
        <div className="flex-grow"></div>
        <div className="flex flex-row text-center w-full">
          <div className="flex-grow"></div>
          <div className="">
            <Form submit={props.submit} users={props.users}/>
          </div>
          <div className="flex-grow"></div>
        </div>
        <div className="flex-grow"></div>
      </div>
    </div>
  )
}

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      otherPlayer: ''
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submit = this.submit.bind(this)
  }

  changeHandler(e) {
    let state = this.state

    state[e.target.name] = e.target.value

    this.setState(state)
  }

  submit(e) {
    if (this.state.username !== this.state.otherPlayer && !this.props.users.includes(this.state.username)) {
      this.props.submit({
        username: this.state.username.trim().toLowerCase(),
        otherPlayer: this.state.otherPlayer.trim().toLowerCase()
      })
    }
  }

  render() {

    console.log('update')
    let inputList = []

    this.props.users.forEach(function (item) {
      inputList.push(<option value={item} />)
    }.bind(inputList))

    let classes = "rounded-none border-b-2 outline-none focus:outline-none transition duration-200 m-1 my-4"

    if (this.state.username !== this.state.otherPlayer && !this.props.users.includes(this.state.username)) {
      classes = classes + ' border-blue-500 focus:border-green-500'
    } else {
      classes = classes + ' border-red-500 focus:border-yellow-500'
    }

    return (
      <div className="p-12 border-2 border-blue-500 rounded-lg">
        <input className={classes} value={this.state.username} onChange={this.changeHandler} id="username" name="username" type="text" placeholder="Username" />
        <br />
        <input list="other" className={classes} value={this.state.otherPlayer} onChange={this.changeHandler} id="otherPlayer" name="otherPlayer" type="text" placeholder="Other Player" />
        <datalist id="other">
          {inputList}
        </datalist>
        <br />
        <button className="m-1 my-4 border-blue-500 border-2 rounded text-blue-500 focus:text-white bg-white focus:bg-blue-500 px-4 p-1 transition duration-200 outline-none focus:outline-none" onClick={this.submit}>Play</button>
      </div>
    )
  }
}

export default StartView