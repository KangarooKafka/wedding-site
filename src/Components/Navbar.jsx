import {Link} from "react-router-dom";
import setJPTheme from "../Functions/setJPTheme";
import setNormalTheme from "../Functions/setNormalTheme";


export default function Navbar() {
    // Toggles theme based on navbar theme button
    const toggleTheme = () => {
        if (localStorage.getItem('stylePref') === 'jurassic-park') {
            setNormalTheme()
        } else {
            setJPTheme()
        }
    }

    return (
        <header>
            <div className="row">
                <img src={require("../images/B&K-10-smallest.jpg")} alt="Kevin and Bailey sitting on a short wall with flowers behind them"
                     className="header-pic" />
            </div>
            <nav className="main-menu">
                <ul>
                    <li><Link to={'/RSVP'}>RSVP</Link></li>
                    <li><Link to={'/Info'}>Info</Link></li>
                    <li><Link to={'/Location'}>Location</Link></li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Share'}>Share Pics</Link></li>
                    <li ><button onClick={toggleTheme}>🦖</button></li>
                </ul>
            </nav>
        </header>
    )
}