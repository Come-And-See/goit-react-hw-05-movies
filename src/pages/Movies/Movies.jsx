import React, { useEffect, useState } from 'react'
import * as css from './Movies.styled';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner'
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setIsLoading(false)
        setSearchParams(query !== '' ? { query } : {})

        axios.defaults.baseURL = "https://api.themoviedb.org/3/"

        axios.get(`/search/movie?query=${query}&api_key=447d26a219f86948e4a42746453807c3`).then(r => {
            setFilms(r.data.results)
            setIsLoading(true)
        });
    }, [query]);


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

export default Movies