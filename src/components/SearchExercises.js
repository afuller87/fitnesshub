import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from "../utilities/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = () => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.targetMuscle.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);
        }
    }
    return (
        <Stack 
        alignItems="center" 
        marginTop="37px"
        justifyContent="center"
        padding="20px">
            <Typography fontWeight={700}
            sx={{
                fontSize: { lg: '30px', xs: '16px'}}}
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
                    }}
                    onClick={(handleSearch)}>
                        Search
                    </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', padding: '20px'}}>
                <HorizontalScrollBar data={bodyParts} />
            </Box>
        </Stack>
    )
}

export default SearchExercises