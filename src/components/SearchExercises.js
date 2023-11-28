import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
    // const [search, setSearch] = useState
    return (
        <Stack 
        alignItems="center" 
        marginTop="37px"
        justifyContent="center"
        padding="20px">
            <Typography fontWeight={700}
            sx={{
                fontSize: { lg: '34px', xs: '20px'}}}
                marginTop="20px"
                textAlign="center">
                Find Your Fit, Find Your Future.
            </Typography>
            <Box position="relative" marginBottom="72px">
                <TextField
                    sx={{
                        input: { 
                        fontWeight: '700',
                        border: 'none', 
                        borderRadius: '5px'},
                        width: { lg: '1000px', xs: '350px'},
                        backgroundColor: 'white',
                        borderRadius: '40px'
                    }}
                    height="76px"
                    value=""
                    onChange={(e) => {}}
                    placeholder="Search Exercises"
                    type="text"/>  
                <Button className="search-btn"
                    sx={{
                        backgroundColor: 'blue',
                        color: 'gold',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px'},
                        fontSize: { lg: '20px', xs: '14px'},
                        height: '56px',
                        position: "absolute",
                        right: '0'
                    }}>
                        Search
                    </Button>
            </Box>
        </Stack>
    )
}

export default SearchExercises