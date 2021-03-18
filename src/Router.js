import LoadView from './Loading';
import GameView from './Game';
import StartView from './Start';
import React from 'react';
import { io } from "socket.io-client"

class Router extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            view: "start",
            user: '',
            users: []
        }

        this.start = this.start.bind(this)

        this.socket = io();

        this.socket.on('start', function (dataRaw) {
            let data = JSON.parse(dataRaw)
            
            this.setState({
                users: data
            })

            console.log('start')
        }.bind(this))

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', function (e) {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }

    start(data) {
        this.socket.on('login', function(proceed) {
            if (proceed) {
                this.socket.off('start')

                this.name = data.username
                this.other = data.otherPlayer

                this.setState({
                    view: "load"
                })

                this.socket.on('play', function (dataRaw) {
                    let data = JSON.parse(dataRaw)
                    if (data.player === this.other || data.player === this.name) {
                        this.user = data.turn
                        this.setState({
                            view: "game",
                        })
                    }
                }.bind(this))
            }
        }.bind(this, data))

        let formattedData = {
            username: data.username.trim().toLowerCase(),
            otherPlayer: data.otherPlayer.trim().toLowerCase()
        }

        this.socket.emit('login', JSON.stringify(formattedData))
    }

    render() {
        if (this.state.view === "start") {
            return (
                <StartView submit={this.start} users={this.state.users} />
            )
        } else if (this.state.view === "load") {
            return (
                <LoadView />
            )
        } else if (this.state.view === "game") {
            return (
                <GameView socket={this.socket} user={this.user} />
            )
        }
    }
}

export default Router