import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom"
import NavLinks from "./NavLinks/NavLinks";
import * as css from './App.styled';
import { ThreeDots } from 'react-loader-spinner'

const Trending = lazy(() => import("../pages/Trending/Trending"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MoviesDetalies = lazy(() => import("../pages/MoviesDetalies/MoviesDetalies"));
const Cast = lazy(() => import("../pages/MoviesDetalies/Cast/Cast"));
const Reviews = lazy(() => import("../pages/MoviesDetalies/Reviews/Reviews"));



export const App = () => {
  return (
    <div>
      <css.Nav>
        <NavLinks />
      </css.Nav>
      <Suspense fallback={<ThreeDots color="#0000ff" />}>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesID" element={<MoviesDetalies />} >
            <Route path="/movies/:moviesID/cast" element={<Cast />} />
            <Route path="/movies/:moviesID/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Error</div>} />
        </Routes >
      </Suspense>
    </div>
  );
};
