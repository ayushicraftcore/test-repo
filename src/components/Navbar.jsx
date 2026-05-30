/*
===================================
IMPORT CSS
===================================
*/
import "./Navbar.css";

/*
===================================
IMPORT IMAGE
===================================
*/
import logo from "../assets/logo.png";

/*
===================================
IMPORT ICONS
===================================
*/
import { FaBars, FaTimes } from "react-icons/fa";

/*
===================================
IMPORT REACT & ROUTER
===================================
*/
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/*
===================================
NAVBAR COMPONENT
===================================
*/
function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  
  // Gets the current URL path (e.g., "/", "/service", "/about")
  const location = useLocation();

  /* Shrink navbar slightly after scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Service", "Solution", "About", "Blog", "Career", "Contact"];

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>

      {/* LOGO */}
      <div className="navbar-logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <img src={logo} alt="Logo" />
          <div>
            <h2>CRAFTCORE</h2>
            <p>IT SERVICE</p>
          </div>
        </Link>
      </div>

      {/* NAV LINKS */}
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map((link) => {
          // Format the route path. "Home" becomes "/", everything else becomes lowercase "/link"
          const routePath = link === "Home" ? "/" : `/${link.toLowerCase()}`;
          
          // Check if the current URL matches this link's route path
          const isActive = location.pathname === routePath;

          return (
            <Link
              key={link}
              to={routePath}
              className={isActive ? "nav-link--active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link}
              <span className="nav-underline" />
            </Link>
          );
        })}

        {/* CHANGED: Mobile Button is now a Link that closes the menu drawer on click */}
        <Link 
          to="/book-call" 
          className="mobile-btn" 
          onClick={() => setMenuOpen(false)}
          style={{ textDecoration: 'none', textAlign: 'center' }}
        >
          GET IN TOUCH
        </Link>
      </nav>

      {/* CHANGED: Desktop Button is now a Link component */}
      <Link 
        to="/book-call" 
        className="desktop-btn"
        style={{ textDecoration: 'none' }}
      >
        GET IN TOUCH
      </Link>

      {/* HAMBURGER */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`hamburger${menuOpen ? " open" : ""}`}>
          <span /><span /><span />
        </span>
      </div>

    </header>
  );
}

export default Navbar;