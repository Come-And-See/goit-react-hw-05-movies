import React, { useEffect, useState } from 'react'
import * as css from './Trending.styled';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner'


const Trending = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.defaults.baseURL = "https://api.themoviedb.org/3/"

    axios.get('trending/all/day?api_key=447d26a219f86948e4a42746453807c3').then(r => {
      setFilms(r.data.results)
      setIsLoading(true)
    });
  }, []);


  return (
    <css.Block>
      <css.Title>Trending today</css.Title>
      <css.ListFilms>
        {isLoading || <ThreeDots color="#0000ff" />}
        {
          films.map(({ id, title, name }) => (
            <css.ItemFilms key={id}><css.LinkFilms to={`/movies/${id}`}>{title || name}</css.LinkFilms></css.ItemFilms>
          ))
        }
      </css.ListFilms>
    </css.Block>
  )
}

export default Trending