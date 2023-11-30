import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utilities/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
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
                justifyContent="center"> {currentExercises.map((exercise, idx) => (<ExerciseCard key={idx} exercise={exercise} />
            ))}
          </Stack>
          <Stack sx={{ 
            marginTop: { lg: '114px', xs: '70px' } }} 
            alignItems="center"> {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </Box>
      );
    };
    
    export default Exercises