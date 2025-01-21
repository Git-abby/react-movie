import { Route, Routes } from "react-router-dom";
import "./App.css";
// This is default export
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContexts";
import About from "./components/pages/About";
import SingleMovie from "./components/pages/SingleMovie";
import Footer from "./components/Footer";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ByGenreMovies from "./components/pages/ByGenreMovies";
import LandingPage from "./components/pages/LandingPage";
// it we do named export we had to wrap function name here in {} like {MovieCard}

// A compo is just any fun() in JS that returns some kind of JSX CODE
// Starts with CAPITAL letter
function App() {
  return (
    // <> </> React Fragment = empty HTML tag
    <MovieProvider>
      <NavBar />
      <main className="main bg-gray-1 dark:bg-dark">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:movieId" element={<SingleMovie />} />
          <Route path="/genre/:genreId" element={<ByGenreMovies />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
