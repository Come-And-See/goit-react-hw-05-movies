import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import * as css from './MoviesDetalies.styled';
import axios from 'axios';



const MoviesDetalies = () => {
  const { moviesID } = useParams();
  const [films, setFilms] = useState([]);
  const location = useLocation();


  useEffect(() => {
    axios.defaults.baseURL = "https://api.themoviedb.org/3/"

    axios.get(`/movie/${moviesID}?api_key=447d26a219f86948e4a42746453807c3`).then(r => {
      setFilms(r.data)
    });
  }, [moviesID]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    films;

  return (
    <>
      <css.Btn><Link to={location.state?.from ?? "/"}>Go back</Link></css.Btn>
      <css.Block>
        {
          (poster_path !== null) ? <css.Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title}`} /> :
            <css.NotFoto />
        }

        <div> <css.TextBlock>
          <css.Title>{title} ({release_date?.slice(0, 4)})</css.Title>
          <css.Score>User Score: {vote_average}</css.Score>

          <h2>Overview</h2>
          <css.Overview>{overview}</css.Overview>

          <h2>Genres</h2>
          <p>{genres?.map(({ name }) => (<css.GenresBtn key={name}>{name}</css.GenresBtn>))}</p>

        </css.TextBlock>
          <div>
            <css.InfoTitle>Additional information</css.InfoTitle>
            <css.Info to="cast" state={{ from: location.state?.from }}>Cast</css.Info>
            <css.Info to="reviews" state={{ from: location.state?.from }}>Reviews</css.Info>
          </div>
        </div>
        <Outlet />
      </css.Block>

    </>
  )
}



export default MoviesDetalies