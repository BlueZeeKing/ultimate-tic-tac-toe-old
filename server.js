#!/usr/bin/env node

const port = 8080
const host = "localhost"

const express = require('express') // import all the modules
const path = require('path');
const app = express()

var users = {}; // set all the variables
var store = {}; // set all the variables
var onlineUsers = [];

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'online.html'));
});

app.get('/offline', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'offline.html'));
});

server = app.listen(port, host, function () { // start the server
    console.log('URL is: ' + host + '\nPort is: ' + port.toString() + '\n\n')
})

const io = require("socket.io")(server) // set up socket.io

io.on('connection', (socket) => { // when a user connects
    socket.emit('start', JSON.stringify(onlineUsers))

    socket.on('login', (dataRaw) => { // when a login message is recieved

        let data = JSON.parse(dataRaw)
        if (!onlineUsers.includes(data.username)) {
            socket.emit('login', true)
            store[socket.id] = {}
            store[socket.id].username = data.username
            store[socket.id].other = data.otherPlayer

            users[data.username] = socket.id
            onlineUsers.push(data.username)

            socket.broadcast.emit('start', JSON.stringify(onlineUsers))

            console.log(store, users[data.otherPlayer], data.username)
            
            if (data.otherPlayer in users) {
                console.log('match1')
                if (store[users[data.otherPlayer]].other === data.username) {
                    console.log('match2')
                    socket.to(users[data.otherPlayer]).emit("play", JSON.stringify({ player: data.username, turn: 'X' }))
                    socket.emit("play", JSON.stringify({ player: data.username, turn: 'O' }))
                }
            }
        } else {
            socket.emit('login', false)
        }
    })

    socket.on('update', (data) => {
        socket.to(users[store[socket.id].other]).emit("update", data)
    })

    socket.on('disconnect', () => { // when a user diconnects remove the event listeners assoicted with them and remove them from the users list
        if (store[socket.id] !== undefined) {
            delete users[store[socket.id].username]
            onlineUsers.splice(onlineUsers.indexOf(store[socket.id].username), 1)
            delete store[socket.id]

            socket.broadcast.emit('start', JSON.stringify(onlineUsers))

            console.log(onlineUsers, users, store)
        }
    });
});