import React, { FC, MutableRefObject } from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DirectionsIcon from '@mui/icons-material/Directions';
import HomeNavBar from '../../navs/homeNavBar';
import { Link as LinkRouter } from 'react-router-dom';
import TextScroller from '../../animated-text';
import CustomAvatar from '../../avatar';
import { useTranslation } from 'react-i18next';

interface IDashBoard {
  scrollToDashboard: MutableRefObject<HTMLDivElement | null>;
  scrollToAbout: MutableRefObject<HTMLDivElement | null>;
  scrollToSkills: MutableRefObject<HTMLDivElement | null>;
  scrollToPortfolio: MutableRefObject<HTMLDivElement | null>;
  scrollToContactMe: MutableRefObject<HTMLDivElement | null>;
  handleScroll: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}

export const DashBoard: FC<IDashBoard> = ({
  scrollToDashboard,
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScroll,
}) => {
  const { t } = useTranslation();
  return (
    <Box ref={scrollToDashboard} >
      <Grid container direction='row' minHeight="100vh">
      <Grid
        xs={12}
        md={5}
        p="4px 50px"
        textAlign="center"
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
              {t('dashboardPage:hi')}
            </Typography>
            <Typography
              variant="h3"
              pt={3}
              sx={{ fontStyle: 'italic', fontWeight: 'bold' }}
            >
              {t('dashboardPage:myName')}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              sx={{ fontStyle: 'italic', fontWeight: 'bold' }}
            >
              {t('dashboardPage:myJob')}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              sx={{ color: 'text.secondary' }}
            >
              {t('dashboardPage:jobDescription')}
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
      <Grid xs={12} md={7} minHeight='80vh'>
        <Box
         minHeight='76vh'
          p="0px 80px"
          sx={{
            background: 'black',
            pt: 4,
            WebkitClipPath: {
              md: 'polygon(10% 0, 100% 0%, 100% 100%, 0% 100%)',
            },
          }}
        >
          <HomeNavBar
            scrollToAbout={scrollToAbout}
            scrollToSkills={scrollToSkills}
            scrollToPortfolio={scrollToPortfolio}
            scrollToContactMe={scrollToContactMe}
            handleScroll={handleScroll}
          />
          <Box p={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomAvatar src="/sofiane-avt.png" width={200} height={300} />
          </Box>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' minHeight='4vh'>
          <TextScroller
            texts={[
              t('dashboardPage:TextScroller-1'),
              t('dashboardPage:TextScroller-2'),
              t('dashboardPage:TextScroller-3'),
            ]}
          />
        </Box>
      </Grid>
      <Grid  container columnSpacing={4}  p={2} textAlign="center"  sx={{ bgcolor: '#1e1d1e', display:'flex', alignItems:'center' }}>          
          <Grid item  xs={6} md={3}>
            <Typography component="body" color="white">
              {t('dashboardPage:selfDescription-1')}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography component="body" color="white">
              {t('dashboardPage:selfDescription-2')}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography component="body" color="white">
              {t('dashboardPage:interestedText')}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} display="flex" alignItems="center" justifyContent='center' >
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
              <Typography pr={1}>
                {t('dashboardPage:interestedButton')}
              </Typography>
              <DirectionsIcon fontSize="large" />
            </Button>
          </Grid>
          </Grid>
      </Grid>
    </Box>
  );
};
