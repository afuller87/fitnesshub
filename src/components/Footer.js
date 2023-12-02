import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="lightgrey">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="2px">
      
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '12px' } }} mt="4px" textAlign="center" pb="4px">Made with 💪🏽 by Amy</Typography>
  </Box>
);

export default Footer;