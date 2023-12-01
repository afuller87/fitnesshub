import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utilities/fetchData';
import ExerciseCard from './ExerciseCard';
// import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

    return (
        <Box id="exercises" 
            sx={{ 
                marginTop: { lg: '109px' } }} marginTop="50px" padding="20px">
          <Typography variant="h4" fontWeight="bold" 
            sx={{ 
                fontSize: { lg: '44px', xs: '30px' } }} 
                marginBottom="46px">Showing Results</Typography>
          <Stack direction="row" 
            sx={{ 
                gap: { lg: '107px', xs: '50px' } }} 
                flexWrap="wrap" 
                justifyContent="center"> {currentExercises.map((exercise, index) => (<ExerciseCard key={index} exercise={exercise}/>
            ))} 
          </Stack>
          <Stack sx={{ 
            marginTop: { lg: '114px', xs: '70px' } }} 
            alignItems="center"> {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / 9)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </Box>
      );
    }
    export default Exercises