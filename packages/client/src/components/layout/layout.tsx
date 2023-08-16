import React, { FC, MutableRefObject, ReactNode } from 'react';
import FixedNavBar from '../navs/nav';
import { Box } from '@mui/material';

interface ILayout {
  scrollToDashboard: MutableRefObject<HTMLDivElement | null>;
  scrollToAbout: MutableRefObject<HTMLDivElement | null>;
  scrollToSkills: MutableRefObject<HTMLDivElement | null>;
  scrollToPortfolio: MutableRefObject<HTMLDivElement | null>;
  scrollToContactMe: MutableRefObject<HTMLDivElement | null>;
  handleScroll: (ref: MutableRefObject<HTMLDivElement | null>) => void;
  children: ReactNode;
}

const Layout: FC<ILayout> = ({
  scrollToDashboard,
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScroll,
  children,
}) => {
  return (
    <Box sx={{ bgcolor: '#F9FAFB' }}>
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
};

export default Layout;
