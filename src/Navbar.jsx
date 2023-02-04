const Navbar = () => {
    return (
        <header>
            <div className="row">
                <a href="#main-menu" id="main-menu-toggle" className="toggle-menu" aria-label="Open main menu">
                    <span aria-hidden="true">Open</span>
                </a>
            </div>
            <nav id="main-menu" className="main-menu" aria-label="Main menu">
                <a href="#main-menu-toggle" id="main-menu-close" className="menu-close" aria-label="Close main menu">
                    <span aria-hidden="true">close</span>
                </a>
                <ul>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Share Photos</a></li>
                    <li><a href="#">RSVP</a></li>
                </ul>
            </nav>
            <a href="#main-menu-toggle" className="backdrop" tabIndex="-1" hidden></a>
        </header>
    )
}

export default Navbar;