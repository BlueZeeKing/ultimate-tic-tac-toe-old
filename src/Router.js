import LoadView from './Loading';
import GameView from './Game';
import StartView from './Start';
import React from 'react';

class Rounter extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            view: "start"
        }

        this.start = this.start.bind(this)
    }

    start(data) {
        this.socket = io.connect(window.location.href);

        this.socket.emit('login', JSON.stringify(data))

        this.setState({
            view: "load"
        })
    }

    render() {
        if (this.state.view === "start") {
            return (
                <StartView submit={this.start}/>
            )
        } else if (this.state.view === "load") {
            return (
                <LoadView />
            )
        } else if (this.state.view === "game") {
            return (
                <GameView socket={this.socket}/>
            )
        }
    }
}