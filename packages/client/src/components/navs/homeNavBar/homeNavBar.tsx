import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavBar = () => {
  return (
    <Box
      display={{ xs: 'none', md: 'flex' }}
      p={2}
      sx={{
        justifyContent: 'space-around',
        width: '80%',
        textAlign: 'center',
        pt: '60px',
      }}
    >
      <Button component={Link} to="/" variant="text" sx={{ color: 'white' }}>
        About Me
      </Button>
      <Button component={Link} to="/" variant="text" sx={{ color: 'white' }}>
        Skills
      </Button>
      <Button component={Link} to="/" variant="text" sx={{ color: 'white' }}>
        Portfolio
      </Button>
      <Button
        component={Link}
        to="/"
        sx={{
          ':hover': {
            bgcolor: 'white',
            color: 'black',
          },
          color: 'black',
          background: 'white',
          borderRadius: 8,
        }}
      >
        Contact Me
      </Button>
    </Box>
  );
};

export default HomeNavBar;
