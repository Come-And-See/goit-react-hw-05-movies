import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as css from './Cast.styled';
import axios from 'axios';
import PropTypes from 'prop-types';


const Cast = () => {
    const { moviesID } = useParams();
    const [films, setFilms] = useState([]);



    useEffect(() => {
        axios.defaults.baseURL = "https://api.themoviedb.org/3/"

        axios.get(`/movie/${moviesID}/credits?api_key=447d26a219f86948e4a42746453807c3`).then(r => {
            setFilms(r.data.cast)

        });
    }, [moviesID]);

    return (
        <>
            <css.Block>
                <css.Title>Cast</css.Title>
                <css.Ul>
                    {films.map(({ profile_path, character, name }) => (<css.Li key={name}>
                        {
                            (profile_path !== null) ? <css.Img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={`${name}`} /> :
                                <css.NotFoto />
                        }
                        <css.Info>{character}</css.Info>
                        <css.Info>({name})</css.Info></css.Li>))}
                </css.Ul>
            </css.Block>


        </>
    )
}

Cast.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            profile_path: PropTypes.string,
            character: PropTypes.string,
            name: PropTypes.string
        })
    )
};

export default Cast