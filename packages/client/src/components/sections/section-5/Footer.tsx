import { Box, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <Grid
      p={6}
      container
      spacing={4}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ background: 'black' }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ fontWeight: 'bold', color: 'white' }}
          textAlign="center"
        >
          BACK TO TOP
        </Typography>
      </Grid>

      <Grid item xs={12} textAlign="center">
        <IconButton
          aria-label="Linkedin.com"
          onClick={() => window.open('https://www.Linkedin.com')}
        >
          <LinkedInIcon color="info" fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Github.com"
          onClick={() => window.open('https://www.github.com')}
        >
          <GitHubIcon color="info" fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Github.com"
          onClick={() => window.open('https://www.facebook.com')}
        >
          <FacebookIcon color="info" fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Github.com"
          onClick={() => window.open('https://www.instagram.com')}
        >
          <InstagramIcon color="info" fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 'bold', color: 'white' }}
          textAlign="center"
        >
          @2023 Ameziane Sofiane{' '}
          <span
            style={{
              color: 'GrayText',
              fontWeight: 'normal',
              fontFamily: 'cursive',
              fontStyle: 'italic',
            }}
          >
            all rights reserved.
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};
