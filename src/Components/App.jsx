import '../style.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RSVP from "./RSVP";
import Info from "./Info";
import Location from "./Location";
import Share from "./Share";
import Login from "./Login";
import useGuest from "../Functions/useGuest";
import setJPTheme from "../Functions/setJPTheme";
import Admin from "./Admin";
import Manage from "./Manage";

export default function App() {
    // Hook for username of guest
    const {username, setUsername} = useGuest();

    // If the user's style preference is already stored as JP, change style
    if (localStorage.getItem('stylePref') === 'jurassic-park') {
        setJPTheme()
    }

    // If user is not already signed in, send them to the login screen and pass username hook
    if(!username) {
        return <Login setUser={setUsername} />
    }

    return (
      <BrowserRouter>
          <div className="background">
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path={'/RSVP'} element={<RSVP />} />
                <Route path={'/'} element={<Home />} />
                <Route path={'/Location'} element={<Location />} />
                <Route path={'/Share'} element={<Share />} />
                <Route path={'/Info'} element={<Info />} />
                <Route path={'/Admin/RSVPED'} element={<Admin />} />
                <Route path={'/Admin/manage'} element={<Manage />} />
            </Routes>
            <footer>
                <Footer />
            </footer>
          </div>
      </BrowserRouter>
  );
}
