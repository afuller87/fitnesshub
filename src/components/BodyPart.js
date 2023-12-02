import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../media/icons/fitness.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    margin="20px"
    sx={{ 
      borderTop: bodyPart === item ?'4px solid blue' : '',
      background: 'white', 
      borderBottomLeftRadius: '20px', 
      width: '170px', 
      height: '180px', 
      cursor: 'pointer', 
      gap: '47px' 
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '50px', height: '50px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="black" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;