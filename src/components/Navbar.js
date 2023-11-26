import React from "react";
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'

import Logo from '../media/images/Logo.png';

const Navbar = () => {
    return (
        <Stack direction="row"
        justifyContent="space-around" 
            sx={{ gap: {
            sm: '122px', xs: '40px'},
            marginTop: { sm: '32px', xs: '20px'},
            justifyContent: 'none'}}
            px="20px">
            <Link to="/">
                <img src={Logo} alt="logo" style={{ 
                    width: '160px',
                    height: '160px',
                    margin: '0 20px'}} />
            </Link>
            <Stack
                direction="row"
                gap="80px"
                fontSize="24px"
                alignItems="center"
            >
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: "blue",
                    borderBottom: '3px solid goldenrod'}}>Home</Link>
                <a href="#exercises" style={{
                    textDecoration: 'none',
                    color: 'blue'}}>Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar