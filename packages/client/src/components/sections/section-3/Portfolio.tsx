import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CarouselSlider from '../../carousel/CarouselSlider';
import { CarouselProvider } from 'pure-react-carousel';
import './Portfolio.css';
import { useTranslation } from 'react-i18next';

export const Portfolio = ({ scrollToPortfolio }: any) => {
  const { t } = useTranslation();
  const [slideCount, setSlideCount] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Box
      ref={scrollToPortfolio}
      p={8}
      sx={{
        backgroundImage: `url(${'/portfolio/portfolio3.svg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={2}>
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 4,
          }}
        >
          {t('portfolioPage:pageTitle')}
        </Typography>
      </Box>
      <Box p={4} textAlign="center">
        <Box className="carousel-container">
          <CarouselProvider
            visibleSlides={slideCount}
            totalSlides={6}
            step={1}
            currentSlide={currentSlide}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            isIntrinsicHeight={true}
          >
            <CarouselSlider
              setSlideCount={setSlideCount}
              setCurrentSlide={setCurrentSlide}
            />
          </CarouselProvider>
        </Box>
      </Box>
    </Box>
  );
};
