import { Routes, Route, NavLink, Link } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './Global-style';
import { useEffect, useState } from "react";

axios.defaults.baseURL = '';
const notify = () => toast('Please, enter your query.');

export const App = () => {

return (
  <>
    <GlobalStyle />
    <Toaster />
    <NavLink>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <hr/>
    </NavLink>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
)
};
