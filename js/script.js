var state = State_Machine.Home;
State_Machine
{
    "Home",
    "Game",
    "Scoreboard",
    "About"
};

const handle_nav_home_click = (event) => 
    {
        event.preventDefault(); 
        console.log("Home Click Detected"); 
    }
const handle_nav_game_click = (event) => 
    {
        event.preventDefault(); 
        console.log("Game Click Detected"); 
    }
const handle_nav_scoreboard_click = (event) => 
    {
        event.preventDefault(); 
        console.log("Scoreboard Click Detected"); 
    }
const handle_nav_about_click = (event) => 
    {
        event.preventDefault(); 
        console.log("About Detected"); 
    }

const Nav_Home = () =>
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

const Nav_Body = () =>
    {
        return(
            React.createElement
            (
                'div',
                { className: 'home_body' },
                <p>
                    Hello World How Are You Doing Today I Hope That You Are Doing Good.
                </p>
            )
        );
    }
    
const Home = () => 
    {
        ReactDOM.render(React.createElement(Nav_Home), document.getElementById('navigation_bar'));
        ReactDOM.render(React.createElement(Nav_Body), document.getElementById('body'));
    }
const Game = () =>
    {

    }
const Scoreboard = () =>
    {

    }
const About = () =>
    {

    }


// Executing Methods
switch(state)
{
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
        Home();
        break;
}