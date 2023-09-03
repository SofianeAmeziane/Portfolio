import { Box, Button } from '@mui/material';
import React, { FC, MutableRefObject } from 'react';
import { useTranslation } from 'react-i18next';

interface IHomeNavBar {
  scrollToAbout: MutableRefObject<HTMLDivElement | null>;
  scrollToSkills: MutableRefObject<HTMLDivElement | null>;
  scrollToPortfolio: MutableRefObject<HTMLDivElement | null>;
  scrollToContactMe: MutableRefObject<HTMLDivElement | null>;
  handleScroll: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}

const HomeNavBar: FC<IHomeNavBar> = ({
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScroll,
}) => {
  const { t } = useTranslation();

  return (
    <Box
      display={{ xs: 'none', md: 'flex' }}
      p={2}
      sx={{
        justifyContent: 'space-around',
        textAlign: 'end',
      }}
    >
      <Button
        onClick={() => handleScroll(scrollToAbout)}
        variant="text"
        sx={{ color: 'white' }}
      >
        {t('navBar:aboutMe')}
      </Button>
      <Button
        onClick={() => handleScroll(scrollToSkills)}
        variant="text"
        sx={{ color: 'white' }}
      >
        {t('navBar:skills')}
      </Button>
      <Button
        onClick={() => handleScroll(scrollToPortfolio)}
        variant="text"
        sx={{ color: 'white' }}
      >
        {t('navBar:portfolio')}
      </Button>
      <Button
        onClick={() => handleScroll(scrollToContactMe)}
        sx={{
          ':hover': {
            bgcolor: 'white',
            color: 'black',
          },
          color: 'black',
          background: 'white',
          borderRadius: 8,
        }}
      >
        {t('navBar:contactMe')}
      </Button>
    </Box>
  );
};

export default HomeNavBar;
