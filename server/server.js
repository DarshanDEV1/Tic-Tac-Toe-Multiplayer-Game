const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let rooms = {};

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('createRoom', () => {
        const roomCode = Math.floor(1000 + Math.random() * 9000).toString();
        rooms[roomCode] = { players: [socket.id] };
        socket.join(roomCode);
        socket.emit('roomCreated', roomCode);
    });

    socket.on('joinRoom', (roomCode) => {
        if (rooms[roomCode] && rooms[roomCode].players.length < 2) {
            rooms[roomCode].players.push(socket.id);
            socket.join(roomCode);
            socket.emit('roomJoined', roomCode);
            io.in(roomCode).emit('startGame');
        }
    });

    socket.on('makeMove', (roomCode, index) => {
        socket.to(roomCode).emit('opponentMove', index);
    });

    socket.on('sendMessage', (roomCode, message) => {
        io.in(roomCode).emit('newMessage', message);
    });

    socket.on('resign', (roomCode) => {
        socket.to(roomCode).emit('opponentResigned');
        delete rooms[roomCode];
    });

    socket.on('restartGame', (roomCode) => {
        io.in(roomCode).emit('startGame');
    });

    socket.on('disconnect', () => {
        for (const roomCode in rooms) {
            const room = rooms[roomCode];
            if (room.players.includes(socket.id)) {
                room.players = room.players.filter(id => id !== socket.id);
                socket.to(roomCode).emit('opponentDisconnected');
                if (room.players.length === 0) {
                    delete rooms[roomCode];
                }
                break;
            }
        }
    });
});

app.get('/api/scores', (req, res) => {
    res.json([{ name: 'Player1', score: 10 }, { name: 'Player2', score: 5 }]);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
