import React from "react";
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../media/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{
            marginTop: { lg: '212px', xs: '70px'},
            marginLeft: { sm: '50px'}}} position="relative" p="20px">
            <Typography fontWeight={600}
                color="darkblue"
                sx={{
                    opacity: 0.2,
                    display: { lg: 'block', xs: 'none'}}}
                    fontSize="100px" 
                    marginTop="-210px"
                    marginLeft="110px"
                    lineHeight="120px">
                Healthy <br /> Uplifting <br /> Bodies
            </Typography>
            <Typography fontSize="20px" lineHeight= "120px" marginBottom={1} fontStyle="italic" marginLeft='100px'>
                Elevate your workout experience, achieve your fitness goals, and stay motivated on your path to a healthier, stronger you!
            </Typography>
            <Button variant="contained" color="primary" href="#exercises"
            sx={{ backgroundColor: 'goldenrod', padding: '7px'}}>Explore Exercises</Button>
            
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />

        </Box>
    )
}

export default HeroBanner