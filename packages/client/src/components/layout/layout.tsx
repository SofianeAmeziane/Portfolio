import React from 'react';
import FixedNavBar from '../navs/nav';
import { Box } from '@mui/material';

export default function Layout({
  scrollToDashboard,
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScroll,
  children,
}: any) {
  return (
    <Box sx={{ bgcolor: '#C4C4C4' }}>
      <FixedNavBar
        scrollToDashboard={scrollToDashboard}
        scrollToAbout={scrollToAbout}
        scrollToSkills={scrollToSkills}
        scrollToPortfolio={scrollToPortfolio}
        scrollToContactMe={scrollToContactMe}
        handleScrollSection={handleScroll}
      />
      <Box>{children}</Box>
    </Box>
  );
}
