import Logo from "../assets/GharKiRasoi.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo" />
        <span>Ghar Ki Rasoi</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
      </div>
      <div className="navbar-login">
        <a>Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
