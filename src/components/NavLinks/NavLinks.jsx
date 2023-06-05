import React from 'react'


import * as css from './NavLinks.styled';

const NavLinks = () => {
    return (
        <>
            <css.Link to="/">Home</css.Link>
            <css.Link to="/movies">Movies</css.Link>
        </>
    )
}

export default NavLinks


