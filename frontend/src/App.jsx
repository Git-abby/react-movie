import { Route, Routes } from "react-router-dom";
import "./App.css";
// This is default export
import MovieCard from "./components/MovieCard";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContexts";
// it we do named export we had to wrap function name here in {} like {MovieCard}

// A compo is just any fun() in JS that returns some kind of JSX CODE
// Starts with CAPITAL letter
function App() {
  const movieNumber = 2;

  return (
    // <> </> React Fragment = empty HTML tag
    <MovieProvider>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
