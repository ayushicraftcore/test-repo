import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Service", path: "/service" },
    { name: "Solution", path: "/Solution" },
    { name: "About", path: "/About" },
    { name: "Blog", path: "/Blog" },
    { name: "Career", path: "/Career" },
    { name: "Contact", path: "/Contact" }
  ];

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      
      <div className="navbar-logo">
        {/* FIXED: Changed to="/" to to="/home" to stay on the IT Services site home page */}
        <Link to="/home" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <img src={logo} alt="Logo" />
          <div>
            <h2>CRAFTCORE</h2>
            <p>IT SERVICE</p>
          </div>
        </Link>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={isActive ? "nav-link--active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
              <span className="nav-underline" />
            </Link>
          );
        })}

        <Link 
          to="/book-call" 
          className="mobile-btn" 
          onClick={() => setMenuOpen(false)}
          style={{ textDecoration: 'none', textAlign: 'center' }}
        >
          GET IN TOUCH
        </Link>
      </nav>

      <Link 
        to="/book-call" 
        className="desktop-btn"
        style={{ textDecoration: 'none' }}
      >
        GET IN TOUCH
      </Link>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`hamburger${menuOpen ? " open" : ""}`}>
          <span /><span /><span />
        </span>
      </div>

    </header>
  );
}

export default Navbar;