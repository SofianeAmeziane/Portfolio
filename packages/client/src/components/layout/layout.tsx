import React from 'react';
import FixedNavBar from '../navs/nav';
import { Box } from '@mui/material';

export default function Layout({ children }: any) {
  return (
    <Box sx={{ bgcolor: '#C4C4C4' }}>
      <FixedNavBar />
      <Box>{children}</Box>
    </Box>
  );
}
