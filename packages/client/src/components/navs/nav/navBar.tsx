import React, { FC, MutableRefObject, useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HumbergerMenu from '../humbergerMenu';
import { useTranslation } from 'react-i18next';
import { LanguagePopover } from '../../languagePopover';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
}));

interface IFixedNavBar {
  scrollToDashboard: MutableRefObject<HTMLDivElement | null>;
  scrollToAbout: MutableRefObject<HTMLDivElement | null>;
  scrollToSkills: MutableRefObject<HTMLDivElement | null>;
  scrollToPortfolio: MutableRefObject<HTMLDivElement | null>;
  scrollToContactMe: MutableRefObject<HTMLDivElement | null>;
  handleScrollSection: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}

const FixedNavBar: FC<IFixedNavBar> = ({
  scrollToDashboard,
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScrollSection,
}) => {
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
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
        <Box pl={2} onClick={() => handleScrollSection(scrollToDashboard)}>
          <img src={'../../LogoSofiane.ico'} alt="sofiane" loading="lazy" />
        </Box>
        <HumbergerMenu
          scrollToAbout={scrollToAbout}
          scrollToSkills={scrollToSkills}
          scrollToPortfolio={scrollToPortfolio}
          scrollToContactMe={scrollToContactMe}
          handleScrollSection={handleScrollSection}
        />
        <Box
          display={{ xs: 'none', md: 'flex' }}
          sx={{
            width: '60%',
            justifyContent: 'space-around',
            textAlign: 'end',
          }}
        >
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
          <LanguagePopover />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default FixedNavBar;
