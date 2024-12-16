import { Link, useNavigate } from "react-router-dom";
import "../css/NavBar.css";
//ICONS
import PersonIcon from "@mui/icons-material/Person";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useEffect, useState } from "react";

function NavBar() {
  const [user, setUser] = useState(null);

  //Mouse effect for user
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        navigate("/signin");
      }
    });

    return () => unsubscribe();
  }, []);

  //Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logour Error", error.message);
      });
  };
  return (
    <div className="navbar bg-gray-1 dark:bg-dark">
      <div className="navbar-brand">
        <Link to="/home">GitFlix</Link>
      </div>
      <div className="navbar-links">
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <div>
          <Link
            className="nav-link"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            style={{ position: "relative" }}>
            <ul>
              <li>
                <PersonIcon />
              </li>
            </ul>
            {showMenu && user && (
              <div className="dropdown-menu">
                <p className="user-display-name">
                  {user && user ? user.displayName || user.email : "Guest"}
                </p>
                {user && (
                  <button className="logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
