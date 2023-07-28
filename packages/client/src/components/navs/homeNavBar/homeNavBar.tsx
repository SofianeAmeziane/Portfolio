import { Box, Button } from '@mui/material';
import React from 'react';

const HomeNavBar = ({
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScroll,
}: any) => {
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
      <Button
        onClick={() => handleScroll(scrollToAbout)}
        variant="text"
        sx={{ color: 'white' }}
      >
        About Me
      </Button>
      <Button
        onClick={() => handleScroll(scrollToSkills)}
        variant="text"
        sx={{ color: 'white' }}
      >
        Skills
      </Button>
      <Button
        onClick={() => handleScroll(scrollToPortfolio)}
        variant="text"
        sx={{ color: 'white' }}
      >
        Portfolio
      </Button>
      <Button
        onClick={() => handleScroll(scrollToContactMe)}
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
