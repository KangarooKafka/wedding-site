import {Link} from "react-router-dom";
import setJPTheme from "../Functions/setJPTheme";
import setNormalTheme from "../Functions/setNormalTheme";
import {useState} from "react";
import {ReactComponent as JP} from "../SVGs/nav-dino.svg";
import {ReactComponent as Rose} from "../SVGs/nav-rose.svg";


export default function Navbar(setState) {
    const [JPHeader, setJPHeader] = useState(localStorage.getItem('stylePref') === 'jurassic-park');

    setState.setTheme(JPHeader)

    // Toggles theme based on navbar theme button
    const toggleTheme = () => {
        if (localStorage.getItem('stylePref') === 'jurassic-park') {
            setJPHeader(false)
            setNormalTheme()
            setState.setTheme(false)
        } else {
            setJPHeader(true)
            setJPTheme()
            setState.setTheme(true)
        }
    }

    return (
        <header>
            <div className="row">
                {JPHeader ? (
                    <img src={require("../images/dinoHeader.jpg")} alt="Kevin and Bailey sitting on a short wall with dinosaurs behind them"
                     className="header-pic" aria-label={"Image of Bailey and Kevin in front of dinosaurs"}/>
                ) : (
                    <img src={require("../images/header.jpg")} alt="Kevin and Bailey sitting on a short wall with flowers behind them"
                         className="header-pic" aria-label={"Image of Bailey and Kevin in front of flowers"}/>
                )}
            </div>
            <nav className="main-menu">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Info'}>Info</Link></li>
                    {JPHeader ? (
                        <li><button onClick={toggleTheme}><Rose className="nav-symbol" aria-label={"Image of rose"}/></button></li>
                    ) : (
                        <li><button onClick={toggleTheme}><JP className="nav-symbol" aria-label={"Image of dinosaur skull"}/></button></li>
                    )}
                    <li><Link to={'/Location'}>Location</Link></li>
                    <li><Link to={'/theBaron'}>Enigma</Link></li>
                </ul>
            </nav>
        </header>
    )
}