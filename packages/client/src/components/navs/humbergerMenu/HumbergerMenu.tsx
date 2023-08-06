import {
  Backdrop,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';
import { LanguagePopover } from '../../languagePopover';

export const HumbergerMenu = ({
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScrollSection,
}: any) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
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
                  {t('navBar:aboutMe')}
                </Button>
                <Button
                  variant="text"
                  sx={{ color: 'white' }}
                  onClick={() => handleScrollSection(scrollToSkills)}
                >
                  {t('navBar:skills')}
                </Button>
                <Button
                  variant="text"
                  sx={{ color: 'white' }}
                  onClick={() => handleScrollSection(scrollToPortfolio)}
                >
                  {t('navBar:portfolio')}
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
                  {t('navBar:contactMe')}
                </Button>
              </Box>
              <Box display="flex" justifyContent="center">
                <LanguagePopover />
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
                  {t('dashboardPage:myName')}
                </Typography>
                <Typography component="h5" variant="h5">
                  {t('dashboardPage:myJob')}
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
    </div>
  );
};
