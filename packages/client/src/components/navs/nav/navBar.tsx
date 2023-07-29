import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HumbergerMenu from '../humbergerMenu';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
}));

const FixedNavBar = ({
  scrollToDashboard,
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScrollSection,
}: any) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 100) ||
        currentScrollPos < 100,
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'black',
        display: { md: visible ? 'none' : 'block', xs: 'block' },
      }}
    >
      <StyledToolbar variant="dense">
        <Box onClick={() => handleScrollSection(scrollToDashboard)}>
          <img src={'../../LogoSofiane.ico'} alt="sofiane" loading="lazy" />
        </Box>

        <HumbergerMenu
          scrollToAbout={scrollToAbout}
          scrollToSkills={scrollToSkills}
          scrollToPortfolio={scrollToPortfolio}
          scrollToContactMe={scrollToContactMe}
          handleScrollSection={handleScroll}
        />
        <Box
          display={{ xs: 'none', md: 'flex' }}
          sx={{
            width: '40%',
            justifyContent: 'space-around',
            textAlign: 'end',
          }}
        >
          <Button
            variant="text"
            sx={{ color: 'white' }}
            onClick={() => handleScrollSection(scrollToAbout)}
          >
            About Me
          </Button>
          <Button
            variant="text"
            sx={{ color: 'white' }}
            onClick={() => handleScrollSection(scrollToSkills)}
          >
            Skills
          </Button>
          <Button
            variant="text"
            sx={{ color: 'white' }}
            onClick={() => handleScrollSection(scrollToPortfolio)}
          >
            Portfolio
          </Button>
          <Button
            sx={{
              ':hover': {
                bgcolor: 'white',
                color: 'black',
              },
              color: 'black',
              background: 'white',
              borderRadius: 8,
            }}
            onClick={() => handleScrollSection(scrollToContactMe)}
          >
            Contact Me
          </Button>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default FixedNavBar;
