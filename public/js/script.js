const State_Machine = {
    Home: 'Home',
    Game: 'Game',
    Scoreboard: 'Scoreboard',
    About: 'About'
};

let current_state = State_Machine.Home;

const handle_nav_home_click = () => UpdateScene(State_Machine.Home);
const handle_nav_game_click = () => UpdateScene(State_Machine.Game);
const handle_nav_scoreboard_click = () => UpdateScene(State_Machine.Scoreboard);
const handle_nav_about_click = () => UpdateScene(State_Machine.About);

const Home = () => {
    ReactDOM.render(React.createElement(Home_Nav), document.getElementById('navigation_bar'));
    ReactDOM.render(React.createElement(Home_Body), document.getElementById('body'));
    ReactDOM.render(React.createElement(Home_Footer), document.getElementById('footer_bar'));
};

const Game = () => {
    ReactDOM.render(React.createElement(Game_Nav), document.getElementById('navigation_bar'));
    ReactDOM.render(React.createElement(Game_Body), document.getElementById('body'));
    ReactDOM.render(React.createElement(Game_Footer), document.getElementById('footer_bar'));
};

const Scoreboard = () => {
    ReactDOM.render(React.createElement(Scoreboard_Nav), document.getElementById('navigation_bar'));
    ReactDOM.render(React.createElement(Scoreboard_Body), document.getElementById('body'));
    ReactDOM.render(React.createElement(Scoreboard_Footer), document.getElementById('footer_bar'));
};

const About = () => {
    ReactDOM.render(React.createElement(About_Nav), document.getElementById('navigation_bar'));
    ReactDOM.render(React.createElement(About_Body), document.getElementById('body'));
    ReactDOM.render(React.createElement(About_Footer), document.getElementById('footer_bar'));
};

const Home_Nav = () => {
    return (
        React.createElement('nav', { className: 'nav-container' },
            React.createElement('a', { href: '#', onClick: handle_nav_home_click, className: 'nav-link' }, 'Home'),
            React.createElement('a', { href: '#', onClick: handle_nav_game_click, className: 'nav-link' }, 'Game'),
            React.createElement('a', { href: '#', onClick: handle_nav_scoreboard_click, className: 'nav-link' }, 'Scoreboard'),
            React.createElement('a', { href: '#', onClick: handle_nav_about_click, className: 'nav-link' }, 'About')
        )
    );
};

const Home_Body = () => {
    return (
        React.createElement('div', { className: 'home_body' },
            React.createElement('h1', null, 'Welcome to the Tic Tac Toe Game'),
            React.createElement('p', null, 'This project showcases the development of a MERN stack application with a Tic Tac Toe game.')
        )
    );
};

const Home_Footer = () => {
    return (
        React.createElement('div', { className: 'home_body' },
            React.createElement('p', null, 'Footer Section')
        )
    );
};

const Game_Nav = () => {
    return (
        React.createElement('nav', { className: 'nav-container' },
            React.createElement('a', { href: '#', onClick: handle_nav_home_click, className: 'nav-link' }, 'Home'),
            React.createElement('a', { href: '#', onClick: handle_nav_game_click, className: 'nav-link' }, 'Game'),
            React.createElement('a', { href: '#', onClick: handle_nav_scoreboard_click, className: 'nav-link' }, 'Scoreboard'),
            React.createElement('a', { href: '#', onClick: handle_nav_about_click, className: 'nav-link' }, 'About')
        )
    );
};

const App = () => {
    const [gameMode, setGameMode] = React.useState(''); // Initialize game mode state

    return (
        <div>
            <Navigation />
            <div id="body">
                <GameBody gameMode={gameMode} /> {/* Pass game mode as a prop */}
            </div>
            <Footer />
        </div>
    );
};

// const GameBody = ({ gameMode }) => {
//     // Use gameMode to conditionally render single player or multiplayer game
//     return (
//         <div>
//             {gameMode === 'singlePlayer' && <SinglePlayerGame />}
//             {gameMode === 'multiPlayer' && <MultiplayerGame />}
//         </div>
//     );
// };

const Navigation = () => {
    const handleSinglePlayerClick = () => {
        setGameMode('singlePlayer'); // Set game mode to single player
    };

    const handleMultiPlayerClick = () => {
        setGameMode('multiPlayer'); // Set game mode to multiplayer
    };

    return (
        <nav className="nav-container">
            <a href="#" className="nav-link" onClick={handleSinglePlayerClick}>
                Single Player
            </a>
            <a href="#" className="nav-link" onClick={handleMultiPlayerClick}>
                Multiplayer
            </a>
            {/* Add other navigation links */}
        </nav>
    );
};


const Game_Body = ({ gameMode }) => {
    return (
        React.createElement('div', { className: 'game_body' },
            React.createElement('button', { onClick: () => setGameMode('single') }, 'Single Player'),
            React.createElement('button', { onClick: () => setGameMode('multi') }, 'Multiplayer'),
            gameMode === 'single' && React.createElement(SinglePlayerGame),
            gameMode === 'multi' && React.createElement(MultiplayerGame)
        )
    );
};

const Game_Footer = () => {
    return (
        React.createElement('div', { className: 'home_body' },
            React.createElement('p', null, 'Footer Section')
        )
    );
};

const Scoreboard_Nav = () => {
    return (
        React.createElement('nav', { className: 'nav-container' },
            React.createElement('a', { href: '#', onClick: handle_nav_home_click, className: 'nav-link' }, 'Home'),
            React.createElement('a', { href: '#', onClick: handle_nav_game_click, className: 'nav-link' }, 'Game'),
            React.createElement('a', { href: '#', onClick: handle_nav_scoreboard_click, className: 'nav-link' }, 'Scoreboard'),
            React.createElement('a', { href: '#', onClick: handle_nav_about_click, className: 'nav-link' }, 'About')
        )
    );
};

const Scoreboard_Body = () => {
    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/scores')
            .then(response => response.json())
            .then(data => setScores(data));
    }, []);

    return (
        React.createElement('div', { className: 'scoreboard_body' },
            React.createElement('h1', null, 'Scoreboard'),
            scores.map((score, index) => React.createElement('p', { key: index }, `${score.name}: ${score.score}`))
        )
    );
};

const Scoreboard_Footer = () => {
    return (
        React.createElement('div', { className: 'home_body' },
            React.createElement('p', null, 'Footer Section')
        )
    );
};

const About_Nav = () => {
    return (
        React.createElement('nav', { className: 'nav-container' },
            React.createElement('a', { href: '#', onClick: handle_nav_home_click, className: 'nav-link' }, 'Home'),
            React.createElement('a', { href: '#', onClick: handle_nav_game_click, className: 'nav-link' }, 'Game'),
            React.createElement('a', { href: '#', onClick: handle_nav_scoreboard_click, className: 'nav-link' }, 'Scoreboard'),
            React.createElement('a', { href: '#', onClick: handle_nav_about_click, className: 'nav-link' }, 'About')
        )
    );
};

const About_Body = () => {
    return (
        React.createElement('div', { className: 'about_body' },
            React.createElement('h1', null, 'About the Author'),
            React.createElement('div', { className: 'author_bio' },
                React.createElement('img', { src: 'author.jpg', alt: 'Author', className: 'author_photo' }),
                React.createElement('p', null, 'Author bio goes here...')
            ),
            React.createElement('div', { className: 'social_links' },
                React.createElement('a', { href: 'https://linkedin.com', target: '_blank' }, 'LinkedIn'),
                React.createElement('a', { href: 'https://github.com', target: '_blank' }, 'GitHub'),
                React.createElement('a', { href: 'https://portfolio.com', target: '_blank' }, 'Portfolio')
            ),
            React.createElement('a', { href: 'resume.pdf', download: true }, 'Download Updated Resume'),
            React.createElement('h2', null, 'Technologies Used'),
            React.createElement('p', null, 'MERN stack (MongoDB, Express, React, Node.js)'),
            React.createElement('h2', null, 'Project Challenges'),
            React.createElement('p', null, 'Description of project challenges and how they were overcome.')
        )
    );
};

const About_Footer = () => {
    return (
        React.createElement('div', { className: 'home_body' },
            React.createElement('p', null, 'Footer Section')
        )
    );
};

const SinglePlayerGame = () => {
    const [board, setBoard] = React.useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = React.useState(true);
    const [winner, setWinner] = React.useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const winner = calculateWinner(newBoard);
        if (winner) setWinner(winner);

        if (!isXNext && !winner) {
            const aiMove = calculateBestMove(newBoard);
            newBoard[aiMove] = 'O';
            setBoard(newBoard);
            setIsXNext(true);

            const winner = calculateWinner(newBoard);
            if (winner) setWinner(winner);
        }
    };

    const calculateBestMove = (board) => {
        const emptyCells = board.map((cell, index) => (cell === null ? index : null)).filter(val => val !== null);
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    };

    const calculateWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    return (
        <div className="tic-tac-toe">
            <div className="board">
                {board.map((cell, index) => (
                    <div key={index} className="cell" onClick={() => handleClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
            <div className="controls">
                {winner ? <p>Winner: {winner}</p> : <p>Next Player: {isXNext ? 'X' : 'O'}</p>}
                <button onClick={() => {
                    setBoard(Array(9).fill(null));
                    setIsXNext(true);
                    setWinner(null);
                }}>Restart</button>
            </div>
        </div>
    );
};

const MultiplayerGame = () => {
    const [room, setRoom] = React.useState('');
    const [roomCode, setRoomCode] = React.useState('');
    const [board, setBoard] = React.useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = React.useState(true);
    const [winner, setWinner] = React.useState(null);
    const [chatMessages, setChatMessages] = React.useState([]);
    const [newMessage, setNewMessage] = React.useState('');

    React.useEffect(() => {
        const socket = io();

        socket.on('roomCreated', (roomCode) => {
            setRoom(roomCode);
        });

        socket.on('roomJoined', (roomCode) => {
            setRoom(roomCode);
        });

        socket.on('startGame', () => {
            setBoard(Array(9).fill(null));
            setIsXNext(true);
            setWinner(null);
        });

        socket.on('opponentMove', (move) => {
            const newBoard = board.slice();
            newBoard[move] = isXNext ? 'X' : 'O';
            setBoard(newBoard);
            setIsXNext(!isXNext);

            const winner = calculateWinner(newBoard);
            if (winner) setWinner(winner);
        });

        socket.on('newMessage', (message) => {
            setChatMessages((messages) => [...messages, message]);
        });

        socket.on('opponentResigned', () => {
            alert('Your opponent has resigned. You win!');
            setRoom('');
        });

        socket.on('opponentDisconnected', () => {
            alert('Your opponent has disconnected. You win!');
            setRoom('');
        });

        return () => socket.disconnect();
    }, [board, isXNext]);

    const handleClick = (index) => {
        if (board[index] || winner || !room) return;

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const winner = calculateWinner(newBoard);
        if (winner) setWinner(winner);

        socket.emit('makeMove', room, index);
    };

    const handleSendMessage = () => {
        socket.emit('sendMessage', room, newMessage);
        setNewMessage('');
    };

    const calculateWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handleResign = () => {
        socket.emit('resign', room);
    };

    return (
        <div className="tic-tac-toe">
            {!room ? (
                <div className="room-selection">
                    <button onClick={() => socket.emit('createRoom')}>Create Room</button>
                    <input
                        type="text"
                        placeholder="Enter Room Code"
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                    />
                    <button onClick={() => socket.emit('joinRoom', roomCode)}>Join Room</button>
                </div>
            ) : (
                <div className="game">
                    <div className="board">
                        {board.map((cell, index) => (
                            <div key={index} className="cell" onClick={() => handleClick(index)}>
                                {cell}
                            </div>
                        ))}
                    </div>
                    <div className="controls">
                        {winner ? <p>Winner: {winner}</p> : <p>Next Player: {isXNext ? 'X' : 'O'}</p>}
                        <button onClick={handleResign}>Resign</button>
                        <button onClick={() => {
                            socket.emit('restartGame', room);
                        }}>Restart</button>
                    </div>
                    <div className="chat-container">
                        <div className="chat-messages">
                            {chatMessages.map((message, index) => (
                                <p key={index}>{message}</p>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const UpdateScene = (new_state) => {
    current_state = new_state;
    console.log("State Detected: " + current_state); 
    switch(current_state) {
        case State_Machine.Home:
            Home();
            break;
        case State_Machine.Game:
            Game();
            break;
        case State_Machine.Scoreboard:
            Scoreboard();
            break;
        case State_Machine.About:
            About();
            break;
        default:
            console.log("Not Detected Any State");
            break;
    }
};

Home();
