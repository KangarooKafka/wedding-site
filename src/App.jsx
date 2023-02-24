import './style.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RSVP from "./RSVP";
import Info from "./Info";
import Location from "./Location";
import Share from "./Share";
import Login from "./Login";
import useGuest from "./useGuest";
import setJPTheme from "./setJPTheme";
import Admin from "./Admin";

function App() {
    const {username, setUsername} = useGuest();

    if (localStorage.getItem('stylePref') === 'jurassic-park') {
        setJPTheme()
    }

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
                <Route path={'/Admin'} element={<Admin />} />
            </Routes>
            <footer>
                <Footer />
            </footer>
          </div>
      </BrowserRouter>
  );
}

export default App;
