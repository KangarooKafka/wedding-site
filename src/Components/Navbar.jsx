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
                <img src={require("../images/headerDino.jpg")} alt="Kevin and Bailey sitting on a short wall with dinosaurs behind them"
                     className="header-pic" />
                    ) : (
                    <img src={require("../images/B&K-10-smallest.jpg")} alt="Kevin and Bailey sitting on a short wall with flowers behind them"
                         className="header-pic" />
                    )}
            </div>
            <nav className="main-menu">
                <ul>
                    <li><Link to={'/RSVP'}>RSVP</Link></li>
                    <li><Link to={'/Info'}>Info</Link></li>
                    <li><Link to={'/Location'}>Location</Link></li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li ><button onClick={toggleTheme}>🦖</button></li>
                </ul>
            </nav>
        </header>
    )
}