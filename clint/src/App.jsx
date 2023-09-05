import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/home/Netflix";
import Player from "./pages/player/Player";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<TvShow />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </Router>
  );
}

export default App;
