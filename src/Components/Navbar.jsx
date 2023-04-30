import {Link} from "react-router-dom";
import setJPTheme from "../Functions/setJPTheme";
import setNormalTheme from "../Functions/setNormalTheme";
import {useState} from "react";


export default function Navbar() {
    const [JPHeader, setJPHeader] = useState(localStorage.getItem('stylePref') === 'jurassic-park');

    // Toggles theme based on navbar theme button
    const toggleTheme = () => {
        if (localStorage.getItem('stylePref') === 'jurassic-park') {
            setJPHeader(false)
            setNormalTheme()
        } else {
            setJPHeader(true)
            setJPTheme()
        }
    }

    return (
        <header>
            <div className="row">
                {JPHeader ? (
                    <img src={require("../images/dinoHeader.jpg")} alt="Kevin and Bailey sitting on a short wall with dinosaurs behind them"
                     className="header-pic" />
                    ) : (
                    <img src={require("../images/header.jpg")} alt="Kevin and Bailey sitting on a short wall with flowers behind them"
                         className="header-pic" />
                    )}
            </div>
            <nav className="main-menu">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Info'}>Info</Link></li>
                    <li ><button onClick={toggleTheme}>🦖</button></li>
                    <li><Link to={'/Location'}>Location</Link></li>
                    <li><Link to={'/RSVP'}>RSVP</Link></li>
                </ul>
            </nav>
        </header>
    )
}