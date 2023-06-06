import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as css from './Reviews.styled';
import axios from 'axios';



const Reviews = () => {
    const { moviesID } = useParams();
    const [films, setFilms] = useState([]);



    useEffect(() => {
        axios.defaults.baseURL = "https://api.themoviedb.org/3/"

        axios.get(`/movie/${moviesID}/reviews?api_key=447d26a219f86948e4a42746453807c3`).then(r => {
            setFilms(r.data.results)

        });
    }, [moviesID]);


    return (
        <>
            <css.Block>
                {
                    (films.length !== 0) ? <css.Title>Reviews</css.Title> : <css.Title>We don't any reviews for this movie.</css.Title>
                }
                <css.Ul>{films.map(({ author, content }) => (<li key={author}><h3>Author: {author}</h3><css.Text>"{content}"</css.Text></li>))}</css.Ul>
            </css.Block>
        </>
    )
}


export default Reviews