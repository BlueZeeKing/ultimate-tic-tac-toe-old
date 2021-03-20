import StartView from './Start';
const GameView = React.lazy(() => import('./Game'));
const LoadView = React.lazy(() => import('./Loading'));
import React, { Suspense } from 'react';
import { io } from "socket.io-client"
import Header from "./Header.js";

class Router extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            view: "start",
            user: '',
            users: []
        }

        this.socket = io();

        this.socket.on('start', function (dataRaw) {
            let data = JSON.parse(dataRaw)
            
            this.state.users = data

            console.log('start')
        }.bind(this))

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', function (e) {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        this.start = this.start.bind(this)
    }
    
    componentDidMount() {
        this.socket.off('start')
        this.socket.on('start', function (dataRaw) {
            let data = JSON.parse(dataRaw)

            this.setState({
                users: data
            })

            console.log('start')
        }.bind(this))
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
                    console.log(dataRaw, this.other)
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

        this.socket.emit('login', JSON.stringify(data))
    }

    render() {
        if (this.state.view === "start") {
            return (
                <StartView submit={this.start} users={this.state.users} />
            )
        } else if (this.state.view === "load") {
            return (
                <Suspense fallback={<div><Header /><h1 className="w-screen absolute bottom-0 text-6xl m-16 font-extrabold">Loading...</h1></div>}>
                    <LoadView />
                </Suspense>
            )
        } else if (this.state.view === "game") {
            return (
                <Suspense fallback={<div><Header /><h1 className="w-screen absolute bottom-0 text-6xl m-16 font-extrabold">Loading...</h1></div>}>
                    <GameView socket={this.socket} user={this.user} />
                </Suspense>
            )
        }
    }
}

export default Router