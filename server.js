#!/usr/bin/env nodejs

const port = 3500
const host = "0.0.0.0"

const express = require('express') // import all the modules
const path = require('path');
const app = express()

var users = {}; // set all the variables
var store = {}; // set all the variables

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server = app.listen(port, host, function () { // start the server
    console.log('URL is: ' + host + '\nPort is: ' + port.toString() + '\n\n')
})

const io = require("socket.io")(server) // set up socket.io

io.on('connection', (socket) => { // when a user connects

    socket.on('login', (dataRaw) => { // when a login message is recieved
        let data = JSON.parse(dataRaw)
        store[socket.id].username = data.username
        store[socket.id].other = data.otherPlayer

        users[data.username] = socket.id
        
        if (data.otherPlay in users) {
            socket.to(users[data.otherPlay]).emit("play", data.username)
        }
    })

    socket.on(update, (data) => {
        socket.to(users[store[socket.id].other]).emit("update", data)
    })

    socket.on('disconnect', () => { // when a user diconnects remove the event listeners assoicted with them and remove them from the users list
        delete store[socket.id]
    });
});