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

function App() {
    const {username, setUsername} = useGuest();

    if(!username) {
        return <Login setUser={setUsername} />
    }
    return (
      <BrowserRouter>
          <div className="background">
            <header>
                <Navbar />
            </header>
            <body>
            <Routes>
                <Route path={'/RSVP'} element={<RSVP />} />
                <Route path={'/'} element={<Home />} />
                <Route path={'/Location'} element={<Location />} />
                <Route path={'/Share'} element={<Share />} />
                <Route path={'/Info'} element={<Info />} />
            </Routes>
            </body>
            <footer>
                <Footer />
            </footer>
          </div>
      </BrowserRouter>



  );
}

export default App;
