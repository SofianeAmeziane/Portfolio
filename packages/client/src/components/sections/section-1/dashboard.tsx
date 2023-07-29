import React from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  styled,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './dashboard.css';
import HomeNavBar from '../../navs/homeNavBar';
import { Link as LinkRouter } from 'react-router-dom';

export const StyledDescriptionBox = styled(Box)({
  background: '#1e1d1e',
});

export const DashBoard = ({
  scrollToDashboard,
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScroll,
}: any) => {
  return (
    <Grid ref={scrollToDashboard} container>
      <Grid item xs={12} md={5}>
        <Box
          className="one"
          sx={{
            minHeight: { md: '80vh' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box p={2} sx={{ mt: { xs: 0, md: '60px' } }}>
            <LinkRouter to="/">
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <img
                  src={'../../LogoSofiane.ico'}
                  alt="sofiane"
                  loading="lazy"
                />
              </Box>
            </LinkRouter>
            <Box mt={15}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Hi, I am
              </Typography>
              <Typography
                variant="h3"
                pt={3}
                sx={{ fontStyle: 'italic', fontWeight: 'bold' }}
              >
                Sofiane Ameziane
              </Typography>
              <Typography component="div" variant="body1">
                <Box sx={{ color: 'text.secondary' }}>Full-Stack Developer</Box>
              </Typography>
            </Box>
            <Box sx={{ mt: 8 }}>
              <IconButton
                aria-label="Linkedin.com"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/sofiane-ameziane-9662b5172/',
                  )
                }
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Github.com"
                onClick={() =>
                  window.open('https://github.com/SofianeAmeziane')
                }
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box
          p="0px 100px"
          sx={{
            background: 'black',
            WebkitClipPath: {
              md: 'polygon(10% 0, 100% 0%, 100% 100%, 0% 100%)',
            },
          }}
        >
          <HomeNavBar
            scrollToDashboard={scrollToDashboard}
            scrollToAbout={scrollToAbout}
            scrollToSkills={scrollToSkills}
            scrollToPortfolio={scrollToPortfolio}
            scrollToContactMe={scrollToContactMe}
            handleScroll={handleScroll}
          />
          <Box p={2} sx={{ textAlign: 'center' }}>
            <Box
              sx={{ width: '60%', height: { md: '80vh' } }}
              textAlign="center"
              component="img"
              alt={'logo Zenika'}
              src={'/norhan-removebg-preview.png'}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <StyledDescriptionBox>
          <Box
            sx={{
              p: 4,
              width: { md: '70%' },
            }}
          >
            <Typography component="body" color="white">
              Having a master's degree in computer science and more than 4 years
              of experience as a Full Stack developer. I had the opportunity to
              work with the JAVA ecosystem before specializing in JavaScript
              technologies, particularly with ReactJS, NextJS and NodeJs.
              Curious and passionate about programming and problem solving, I am
              always ready for new challenges and new technologies to discover.
            </Typography>
            <Box
              textAlign="center"
              sx={{
                width: '120px',
                borderRight: 3,
                borderRightColor: 'white',
                borderLeft: 3,
                borderLeftColor: 'white',
                mt: 2,
              }}
            >
              <Button
                sx={{
                  color: 'white',
                }}
              >
                READ MORE
              </Button>
            </Box>
          </Box>
        </StyledDescriptionBox>
      </Grid>
    </Grid>
  );
};
