import { Grid, IconButton, Typography } from '@mui/material';
import React, { FC, MutableRefObject } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';

interface IFooter {
  scrollToDashboard: MutableRefObject<HTMLDivElement | null>;
  handleScroll: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}

export const Footer: FC<IFooter> = ({ scrollToDashboard, handleScroll }) => {
  const { t } = useTranslation();
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
          {t('footerPage:back-button')}
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
              marginLeft: 2,
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
