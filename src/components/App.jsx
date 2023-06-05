import { Route, Routes } from "react-router-dom"
import NavLinks from "./NavLinks/NavLinks";

import * as css from './App.styled';
import Trending from "../pages/Trending/Trending";
import Movies from "../pages/Movies/Movies";


export const App = () => {
  return (
    <div>
      <css.Nav>
        <NavLinks />
      </css.Nav>

      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesID" element={<div>qweqwe</div>} />

        <Route path="*" element={<div>Error</div>} />
      </Routes >
    </div>
  );
};
