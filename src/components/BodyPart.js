import React from "react";
import { Stack, Typography } from '@mui/material';
import Icon from '../media/icons/fitness.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { 
        borderTop: '4px solid goldenrod', 
        background: 'offwhite', 
        borderBottomLeftRadius: '20px', 
        width: '270px', 
        height: '282px', 
        cursor: 'pointer', 
        gap: '47px' } : { 
            background: 'offwhite', 
            borderBottomLeftRadius: '20px', 
            width: '270px', 
            height: '282px', 
            cursor: 'pointer', 
            gap: '47px' }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="arm" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="blue" textTransform="capitalize"> {item}</Typography>
    </Stack>
  );
  
  export default BodyPart;