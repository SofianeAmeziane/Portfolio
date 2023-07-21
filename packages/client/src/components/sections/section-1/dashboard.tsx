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

export const StyledDescriptionBox = styled(Box)({
  background: '#1e1d1e',
});

export const DashBoard = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        <Box
          className="one"
          sx={{
            minHeight: { md: '80vh' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box p={2} mt="60px">
            <Box>
              <img src={'../../LogoSofiane.ico'} alt="sofiane" loading="lazy" />
            </Box>
            <Box mt={20}>
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
                onClick={() => window.open('https://www.Linkedin.com')}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Github.com"
                onClick={() => window.open('https://www.github.com')}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box
          className="two"
          p="0px 100px"
          sx={{
            background: 'black',
          }}
        >
          <HomeNavBar />
          <Box p={2} sx={{ textAlign: 'center' }}>
            <Box
              sx={{ width: '60%' }}
              textAlign="center"
              component="img"
              alt={'logo Zenika'}
              src={'/sofiane-avatar.png'}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley
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
