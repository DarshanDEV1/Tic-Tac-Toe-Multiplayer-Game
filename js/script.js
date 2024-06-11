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
            React.createElement()
        );
    }
ReactDOM.render(React.createElement(Nav_Home), document.getElementById('root'));