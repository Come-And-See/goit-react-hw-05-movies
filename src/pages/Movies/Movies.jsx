import React, { useEffect, useState } from 'react'
import * as css from './Movies.styled';
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();


    useEffect(() => {
        if (query === '') {
            if (location.search) {
                setQuery(location.search.split("=").pop())
            }
            return;
        }

        setSearchParams({ query })

        axios.defaults.baseURL = "https://api.themoviedb.org/3/"

        axios.get(`/search/movie?query=${query}&api_key=447d26a219f86948e4a42746453807c3`).then(r => {
            setFilms(r.data.results)
        });
    }, [query, setSearchParams, searchParams, location.search]);


    const onInputQuery = (e) => {
        e.preventDefault();
        setQuery(e.target.elements.query.value)
    }



    return (
        <css.Block>
            <css.Form onSubmit={onInputQuery}>
                <css.Input type="text" name="query" />
                <css.Button type="submit">Search</css.Button>
            </css.Form>
            <css.ListFilms>
                {
                    films.map(({ id, title, name }) => (
                        <css.ItemFilms key={id}><css.LinkFilms to={`/movies/${id}`} state={{ from: location }}>{title || name}</css.LinkFilms></css.ItemFilms>
                    ))
                }
            </css.ListFilms>
        </css.Block >
    )
}


export default Movies