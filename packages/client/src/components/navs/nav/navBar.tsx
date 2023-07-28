import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Backdrop,
  Grid,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'end',
  // Override media queries injected by theme.mixins.toolbar
}));

const FixedNavBar = ({
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScrollSection,
}: any) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Box display={{ xs: 'flex', md: 'none' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={open ? handleClose : handleClickOpen}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Box display={{ md: 'none' }}>
          <Backdrop
            sx={{
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
            onClick={handleClose}
          >
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="start"
              sx={{ height: '70%' }}
            >
              <Grid item xs={4}>
                <Box sx={{ display: 'flex' }}>
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
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="start"
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    My Name Is Sofiane
                  </Typography>
                  <Typography component="h5" variant="h5">
                    I Am A Developer
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <IconButton
                      aria-label="Linkedin.com"
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/in/sofiane-ameziane-9662b5172/',
                        )
                      }
                    >
                      <LinkedInIcon color="info" fontSize="large" />
                    </IconButton>
                    <IconButton
                      aria-label="Github.com"
                      onClick={() =>
                        window.open('https://github.com/SofianeAmeziane')
                      }
                    >
                      <GitHubIcon color="info" fontSize="large" />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Backdrop>
        </Box>
        <Box
          display={{ xs: 'none', md: 'flex' }}
          sx={{
            width: '40%',
            justifyContent: 'space-around',
            textAlign: 'end',
            mr: 3,
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
