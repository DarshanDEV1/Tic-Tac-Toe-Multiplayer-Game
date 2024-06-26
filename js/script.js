const State_Machine =
{
    Home : "Home",
    Game : "Game",
    Scoreboard : "Scoreboard",
    About : "About"
};

var current_state = State_Machine.Home;
    
const handle_nav_home_click = (event) => 
    {
        event.preventDefault(); 
        UpdateScene(State_Machine.Home);
        console.log("Home Click Detected"); 
    }
const handle_nav_game_click = (event) => 
    {
        event.preventDefault(); 
        UpdateScene(State_Machine.Game);
        console.log("Game Click Detected"); 
    }
const handle_nav_scoreboard_click = (event) => 
    {
        event.preventDefault(); 
        UpdateScene(State_Machine.Scoreboard);
        console.log("Scoreboard Click Detected"); 
    }
const handle_nav_about_click = (event) => 
    {
        event.preventDefault(); 
        UpdateScene(State_Machine.About);
        console.log("About Detected"); 
    }
    
const Home = () => 
    {
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

        ReactDOM.render(React.createElement(Home_Nav), document.getElementById('navigation_bar'));
        ReactDOM.render(React.createElement(Home_Body), document.getElementById('body'));
        // ReactDOM.render(React.createElement(Home_Footer), document.getElementById('footer_bar'));
    }
const Game = () =>
    {
        const Game_Nav = () =>
            {
                return(
                    React.createElement
                    (
                        'div',
                        { className: 'nav-container' },
                        React.createElement(
                            'a',
                            { href: '#', onClick: handle_nav_home_click, className: 'nav-link' },
                            'Home'
                        ),
                        
                        React.createElement(
                            'a',
                            { href: '#', onClick: handle_nav_game_click, className: 'nav-link' },
                            'Game'
                        ),
            
                        React.createElement(
                            'a',
                            { href: '#', onClick: handle_nav_scoreboard_click, className: 'nav-link' },
                            'Scoreboard'
                        ),
            
                        React.createElement(
                            'a',
                            { href: '#', onClick: handle_nav_about_click, className: 'nav-link' },
                            'About'
                        )
                    )
                );
            }
        
            const Game_Body = () => {
                return (
                    React.createElement(
                        'div',
                        { className: 'home_body' },
                        React.createElement(TicTacToe, null)
                    )
                );
            }
            
            // Define the TicTacToe component
            const TicTacToe = () => {
                const initialBoard = Array(9).fill(null);
                const [board, setBoard] = React.useState(initialBoard);
                const [xIsNext, setXIsNext] = React.useState(true);
                const [winner, setWinner] = React.useState(null);
            
                const handleClick = (i) => {
                    if (winner || board[i]) return;
                    const newBoard = [...board];
                    newBoard[i] = xIsNext ? 'X' : 'O';
                    setBoard(newBoard);
                    setXIsNext(!xIsNext);
                    setWinner(calculateWinner(newBoard));
                };
            
                const resetGame = () => {
                    setBoard(initialBoard);
                    setXIsNext(true); // Reset xIsNext to true
                    setWinner(null);
                };
            
                const renderCell = (i) => {
                    return (
                        <div className="cell" onClick={() => handleClick(i)}>
                            {board[i]}
                        </div>
                    );
                };
            
                const calculateWinner = (squares) => {
                    const lines = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6],
                    ];
                    for (let i = 0; i < lines.length; i++) {
                        const [a, b, c] = lines[i];
                        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                            return squares[a];
                        }
                    }
                    return null;
                };
            
                const renderStatus = () => {
                    if (winner) {
                        return `Winner: ${winner}`;
                    } else {
                        return `Next player: ${xIsNext ? 'X' : 'O'}`;
                    }
                };
            
                return (
                    <div className="tic-tac-toe">
                        <div className="status">{renderStatus()}</div>
                        <div className="board">
                            {Array(9)
                                .fill()
                                .map((_, i) => renderCell(i))}
                        </div>
                        <div className="controls">
                            <button onClick={resetGame}>Reset Game</button>
                        </div>
                    </div>
                );
            };
            
        
        const Game_Footer = () =>
            {
                return(
                    React.createElement
                    (
                        'div',
                        { className: 'home_body' },
                        <p>
                            Hello Yaaro This is Footer Section.
                        </p>
                    )
                );
            }

        ReactDOM.render(React.createElement(Game_Nav), document.getElementById('navigation_bar'));
        ReactDOM.render(React.createElement(Game_Body), document.getElementById('body'));
        // ReactDOM.render(React.createElement(Game_Footer), document.getElementById('footer_bar'));
    }
const Scoreboard = () =>
    {
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

        ReactDOM.render(React.createElement(Scoreboard_Nav), document.getElementById('navigation_bar'));
        ReactDOM.render(React.createElement(Scoreboard_Body), document.getElementById('body'));
        // ReactDOM.render(React.createElement(Scoreboard_Footer), document.getElementById('footer_bar'));
    }
const About = () =>
    {
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

        ReactDOM.render(React.createElement(About_Nav), document.getElementById('navigation_bar'));
        ReactDOM.render(React.createElement(About_Body), document.getElementById('body'));
        // ReactDOM.render(React.createElement(About_Footer), document.getElementById('footer_bar'));
    }


// Executing Methods
UpdateScene(State_Machine.Home);

function UpdateScene(state)
{
    switch(state)
    {
        case State_Machine.Home:
            Home();
            current_state = State_Machine.Home;
            break;
        case State_Machine.Game:
            Game();
            current_state = State_Machine.Game;
            break;
        case State_Machine.Scoreboard:
            Scoreboard();
            current_state = State_Machine.Scoreboard;
            break;
        case State_Machine.About:
            About();
            current_state = State_Machine.About;
            break;
        default:
            Home();
            current_state = State_Machine.Home;
            break;
    }
}