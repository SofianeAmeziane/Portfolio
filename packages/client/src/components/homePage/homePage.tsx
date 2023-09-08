import React, { MutableRefObject, useRef } from 'react';
import Layout from '../layout/layout';
import { Box } from '@mui/material';
import DashBoard from '../sections/section-1';
import About from '../sections/section-2';
import Portfolio from '../sections/section-3';
import Footer from '../sections/section-5';
import ContactMe from '../sections/section-4';
import AnimatedCursor from 'react-animated-cursor';

export const HomePage = () => {
  const scrollToDashboard = useRef<null | HTMLDivElement>(null);
  const scrollToAbout = useRef<null | HTMLDivElement>(null);
  const scrollToSkills = useRef<null | HTMLDivElement>(null);
  const scrollToPortfolio = useRef<null | HTMLDivElement>(null);
  const scrollToContactMe = useRef<null | HTMLDivElement>(null);
  const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) =>
    ref?.current?.scrollIntoView();

  return (
    <Layout
      scrollToDashboard={scrollToDashboard}
      scrollToAbout={scrollToAbout}
      scrollToSkills={scrollToSkills}
      scrollToPortfolio={scrollToPortfolio}
      scrollToContactMe={scrollToContactMe}
      handleScroll={handleScroll}
    >
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 46, 99"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        outerStyle={{
          mixBlendMode: 'exclusion',
          zIndex: 2000,
        }}
      />
      <DashBoard
        scrollToDashboard={scrollToDashboard}
        scrollToAbout={scrollToAbout}
        scrollToSkills={scrollToSkills}
        scrollToPortfolio={scrollToPortfolio}
        scrollToContactMe={scrollToContactMe}
        handleScroll={handleScroll}
      />
      <About scrollToAbout={scrollToAbout} scrollToSkills={scrollToSkills} />
      <Portfolio scrollToPortfolio={scrollToPortfolio} />
      <ContactMe scrollToContactMe={scrollToContactMe} />
      <Footer
        scrollToDashboard={scrollToDashboard}
        handleScroll={handleScroll}
      />
    </Layout>
  );
};
