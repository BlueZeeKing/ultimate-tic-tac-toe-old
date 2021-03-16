import React from 'react';
import './App.css';
import Header from "./Header.js";

function StartView(props) {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return(
    <div className = "w-screen h-screen" >
      <Header />
      <div className="flex flex-col text-center h-full w-full">
        <div className="flex-grow"></div>
        <div className="flex flex-row text-center w-full">
          <div className="flex-grow"></div>
          <div className="">
            <Form submit={props.submit}/>
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
    this.props.submit(this.state.username, this.state.otherPlayer)
  }

  render() {
    return (
      <div className="p-12 border-2 border-blue-500 rounded-lg">
        <input className="rounded-none border-b-2 outline-none focus:outline-none border-blue-500 focus:border-green-500 transition duration-200 m-1 my-4" value={this.state.username} onChange={this.changeHandler} id="username" name="username" type="text" placeholder="Username" />
        <br />
        <input className="rounded-none border-b-2 outline-none focus:outline-none border-blue-500 focus:border-green-500 transition duration-200 m-1 my-4" value={this.state.otherPlayer} onChange={this.changeHandler} id="otherPlayer" name="otherPlayer" type="text" placeholder="Other Player" />
        <br />
        <button className="m-1 my-4 border-blue-500 border-2 rounded text-blue-500 focus:text-white bg-white focus:bg-blue-500 px-4 p-1 transition duration-200 outline-none focus:outline-none" onClick={this.submit}>Play</button>
      </div>
    )
  }
}

export default StartView