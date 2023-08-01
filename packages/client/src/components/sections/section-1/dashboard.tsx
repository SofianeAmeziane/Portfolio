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
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DirectionsIcon from '@mui/icons-material/Directions';
import './dashboard.css';
import HomeNavBar from '../../navs/homeNavBar';
import { Link as LinkRouter } from 'react-router-dom';

export const DashBoard = ({
  scrollToDashboard,
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScroll,
}: any) => {
  return (
    <Grid ref={scrollToDashboard} container minHeight="100vh">
      <Grid
        item
        xs={12}
        md={5}
        p="4px 50px"
        textAlign={{ xs: 'center', md: 'start' }}
        sx={{ pt: { xs: 0, md: 4 } }}
      >
        <Box p={2}>
          <LinkRouter to="/">
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <img src={'../../LogoSofiane.ico'} alt="sofiane" loading="lazy" />
            </Box>
          </LinkRouter>
          <Box mt={10}>
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
            <Typography
              component="div"
              variant="body1"
              sx={{ fontStyle: 'italic', fontWeight: 'bold' }}
            >
              Full-Stack Developer
            </Typography>
            <Typography
              component="div"
              variant="body1"
              sx={{ color: 'text.secondary' }}
            >
              I build accessible, inclusive products and digital experiences for
              the web.
            </Typography>
          </Box>
          <Box sx={{ mt: 6 }}>
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
              onClick={() => window.open('https://github.com/SofianeAmeziane')}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Github.com"
              onClick={() =>
                window.open('https://www.facebook.com/sofiane.ameziane.52/')
              }
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Github.com"
              onClick={() =>
                window.open('https://www.instagram.com/sofianeamz/')
              }
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box
          p="0px 120px"
          sx={{
            background: 'black',
            pt: 4,
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
              sx={{ width: '100%' }}
              textAlign="center"
              component="img"
              alt={'logo Zenika'}
              src={'/sofiane.png'}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ bgcolor: '#1e1d1e' }}>
        <Grid container spacing={4} p={2} textAlign="center">
          <Grid item xs={6} md={3}>
            <Typography component="body" color="white">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography component="body" color="white">
              Proven experience building successful products for clients across
              several countries.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography component="body" color="white">
              Interested in working together? We should queue up a time to chat.
              I’ll buy the coffee.
            </Typography>
          </Grid>{' '}
          <Grid item xs={6} md={3} display="flex" alignItems="center">
            <Button
              onClick={() => handleScroll(scrollToContactMe)}
              sx={{
                textTransform: 'none',
                lineHeight: 1.5,
                pl: { xs: 2, md: 4 },
                pr: { xs: 2, md: 3 },
                ':hover': {
                  color: 'black',
                  bgcolor: 'aqua',
                },
                borderRadius: 8,
                border: 1,
                borderColor: 'aqua',
                bgcolor: 'none',
                color: 'aqua',
              }}
            >
              <Typography pr={1}>Let's do this</Typography>
              <DirectionsIcon fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
