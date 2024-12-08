import { Link } from "react-router-dom";
import '../css/NavBar.css'
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-brand"> 
        <Link to="/">GitFlix</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Popular Now</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </div>
  );
}

export default NavBar;
