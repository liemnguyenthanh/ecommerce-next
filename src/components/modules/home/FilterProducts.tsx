import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import SortIcon from '@mui/icons-material/Sort';
export const FilterProducts = () => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Typography
        component='p'
        fontSize={24}
        fontWeight={700}
        color='primary.main'
      >
        Products
      </Typography>

      <Button variant='outlined' size='small'>
        <SortIcon />
      </Button>
    </Box>
  );
};
