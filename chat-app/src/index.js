const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io')
const {generateMessage} = require('../src/utils/messeges')
const app = express();
const PORT = process.env.port || 4000;
const server = http.createServer(app)

const io = socketio(server);
const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));
let count = 10;
io.on('connection',(socket)=>{
    socket.emit('message',generateMessage('welcome'));
    socket.broadcast.emit('message','New user connected')
    socket.on('sendMessage',(message,callback)=>{
        io.emit('message',message);
        callback();
    });
    socket.on('disconnect',()=>{
        io.emit('message','User disconnected');
    });
    socket.on('sendLocation',(coords,callback)=>{
        console.log('location in server is ','location of user ${location.lat} ,  ${location.lan}');
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback();
    })
});



server.listen(PORT,()=>{
    console.log('server is listening on ',PORT);
})