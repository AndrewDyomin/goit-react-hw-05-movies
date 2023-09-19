import { Routes, Route, NavLink } from "react-router-dom";
import { GlobalStyle } from './Global-style';
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import MovieDetails from "pages/MovieDetails";

export const App = () => {

return (
  <>
    <GlobalStyle />
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
      </ul>
      <hr/>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  </>
)
};
