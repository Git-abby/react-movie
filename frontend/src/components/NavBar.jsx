import { Link, useNavigate } from "react-router-dom";
import "../css/NavBar.css";
//ICONS
import PersonIcon from "@mui/icons-material/Person";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useEffect, useState } from "react";
import { getAllGenres } from "../services/api";
import GenresNavbar from "./GenresNavbar";

function NavBar() {
  // TO store user info
  const [user, setUser] = useState(null);

  //Mouse effect for user
  const [showMenu, setShowMenu] = useState(false);
  // Mouse Effect on Genres
  const [showGenres, setShowGenres] = useState(false);

  // TO navigate
  const navigate = useNavigate();

  console.log(showGenres);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  //Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logour Error", error.message);
      });
  };
  return (
    <>
      <div className="navbar bg-gray-1 dark:bg-dark">
        <div className="navbar-brand">
          <Link to="/">GitFlix</Link>
        </div>
        <div className="navbar-links">
          {user && user ? (
            <>
              <Link
                className="nav-link"
                onClick={() => setShowGenres(!showGenres)}>
                Genres
              </Link>
              <Link to="/favorites" className="nav-link">
                Favorites
              </Link>
              <div>
                {user && (
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
                          {user && user
                            ? user.displayName || user.email
                            : "Guest"}
                        </p>
                        {user && (
                          <button
                            className="logout-button"
                            onClick={handleLogout}>
                            Logout
                          </button>
                        )}
                      </div>
                    )}
                  </Link>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/signin" className="nav-link">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      {showGenres && <GenresNavbar />}
    </>
  );
}

export default NavBar;
