import '../style.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RSVP from "./RSVP";
import Info from "./Info";
import Location from "./Location";
import Login from "./Login";
import useGuest from "../Functions/useGuest";
import setJPTheme from "../Functions/setJPTheme";
import Admin from "./Admin";
import Manage from "./Manage";
import ErrorBoundary from "./ErrorBoundary";
import {useState} from "react";

export default function App() {
    // Hook for username of guest
    const {username, setUsername} = useGuest();

    // If the user's style preference is already stored as JP, change style
    if (localStorage.getItem('stylePref') === 'jurassic-park') {
        setJPTheme()
    }

    const [SVGTheme, setSVGTheme] = useState(localStorage.getItem('stylePref') === 'jurassic-park');

    // If user is not already signed in, send them to the login screen and pass username hook
    if(!username) {
        return <Login setUser={setUsername} />
    }

    return (
      <ErrorBoundary>
        <BrowserRouter>
          <div className="background">
            <header>
                <Navbar setTheme={setSVGTheme} />
            </header>
            <Routes>
                <Route path={'/RSVP'} element={<RSVP />} />
                <Route path={'/'} element={<Home SVGTheme={SVGTheme}/>} />
                <Route path={'/Location'} element={<Location SVGTheme={SVGTheme} />} />
                <Route path={'/Info'} element={<Info SVGTheme={SVGTheme} />} />
                <Route path={'/Admin/RSVPED'} element={<Admin />} />
                <Route path={'/Admin/manage'} element={<Manage />} />
            </Routes>
            <footer>
                <Footer />
            </footer>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
  );
}
