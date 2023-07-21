import React from 'react';
import Layout from '../layout/layout';
import { Box } from '@mui/material';
import './index.css';
import DashBoard from '../sections/section-1';
import About from '../sections/section-2';
import Footer from '../sections/section-5';

export const HomePage = () => {
  return (
    <Box>
      <Layout>
        <DashBoard />
        <About />
        <Footer />
      </Layout>
    </Box>
  );
};
