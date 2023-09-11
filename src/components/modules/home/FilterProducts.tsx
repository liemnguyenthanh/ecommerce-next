import SortIcon from '@mui/icons-material/Sort';
import { Box, Button, Popover, TextField, Typography } from '@mui/material';
import React from 'react';

export const FilterProducts = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const open = Boolean(anchorEl);
  const id = open ? 'filter-product-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

      <Button
        variant='outlined'
        size='small'
        aria-describedby={id}
        onClick={handleClick}
      >
        <SortIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPaper-root': {
            boxShadow: '-3px 3px 6px 6px #00000010',
            border: 1,
            borderColor: 'secondary.main',
          },
        }}
      >
        <Box minWidth={400}>
          <Typography
            fontSize={18}
            p={1.5}
            fontWeight={500}
            sx={{
              bgcolor: '#f3f3f3',
              borderBottom: 1,
              borderColor: 'secondary.main',
            }}
          >
            Filter
          </Typography>
          <Box p={1.5}>
            <TextField
              variant='outlined'
              placeholder='page number'
              size='medium'
              fullWidth
            />
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};
