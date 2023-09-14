import { Routes, Route, NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './Global-style';
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import MovieDetails from "pages/MovieDetails";



// const notify = () => toast('Please, enter your query.');

export const App = () => {

return (
  <>
    <GlobalStyle />
    <Toaster />
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
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </>
)
};
