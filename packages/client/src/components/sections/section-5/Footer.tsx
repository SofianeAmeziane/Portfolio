import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Footer = ({ scrollToDashboard, handleScroll }: any) => {
  return (
    <Grid
      pb={4}
      container
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ background: 'black' }}
    >
      <Grid item xs={12} textAlign="center">
        <IconButton
          aria-label="Github.com"
          onClick={() => handleScroll(scrollToDashboard)}
        >
          <KeyboardArrowUpIcon color="info" fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontWeight: 'bold', color: 'white' }}
          textAlign="center"
        >
          BACK TO TOP
        </Typography>
      </Grid>

      <Grid item xs={12} textAlign="center">
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
          onClick={() => window.open('https://github.com/SofianeAmeziane')}
        >
          <GitHubIcon color="info" fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Github.com"
          onClick={() =>
            window.open('https://www.facebook.com/sofiane.ameziane.52/')
          }
        >
          <FacebookIcon color="info" fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Github.com"
          onClick={() => window.open('https://www.instagram.com/sofianeamz/')}
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
          @2023 Ameziane Sofiane
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
