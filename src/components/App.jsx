import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from './Global-style';
import { SharedLayout } from "./SharedLayout";
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {

return (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </>
)
};
