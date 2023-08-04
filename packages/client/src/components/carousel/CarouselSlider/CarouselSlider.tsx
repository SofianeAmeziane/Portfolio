import React, { useContext, useEffect } from 'react';

import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselContext } from 'pure-react-carousel';
import './CarouselSlider.css';
import Card from '../Card';
import { Box } from '@mui/material';
import useWindowSize from '../../../hooks/windowSiz';
import { useTranslation } from 'react-i18next';

const CarouselSlider = ({ setSlideCount, setCurrentSlide }: any) => {
  const { t } = useTranslation();
  const screenWidth = useWindowSize();

  const carouselContext = useContext(CarouselContext);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible: any) => {
      const { currentSlide, totalSlides, visibleSlides } =
        carouselContext.state;

      setSlideCount(slideToBeVisible);

      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 832) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1088) {
      updateCarouselSlide(2);
    }
    //>= 1088
    else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <Box>
      <Slider>
        <Slide index={0} className="slide">
          <Card
            jobTitle={t('portfolioPage:jobTitle-1')}
            description={t('portfolioPage:zenika-description')}
            image="/portfolio/zenika.png"
            skills={[
              'TypeScript',
              'Mui',
              'Reactjs',
              'React Query',
              'Redux',
              'Node js',
              'Express',
              'Npm',
              'CSS-in-JS',
              'GitHub actions',
            ]}
          />
        </Slide>
        <Slide index={1}>
          <Card
            jobTitle={t('portfolioPage:jobTitle-1')}
            description={t('portfolioPage:siemens-energy-description')}
            image="/portfolio/siemens-energy.png"
            skills={[
              'Typescript',
              'Sass',
              'JSX',
              'Reactjs',
              'NextJs',
              'Ant Design',
              'npm',
              'yarn',
              'SQL Server',
              'IIS Server',
            ]}
          />
        </Slide>
        <Slide index={2}>
          <Card
            jobTitle={t('portfolioPage:jobTitle-2')}
            description={t('portfolioPage:kaayu-description')}
            image="/portfolio/kaayu.jpg"
            skills={[
              'TypeScript',
              'Sass',
              'JSX',
              'Reactjs',
              'NextJs',
              'Redux-SAGA',
              'Ant',
              'Design',
              'AWS Lambda Architecture',
              'DynamoDB',
              'Jira',
            ]}
          />
        </Slide>
        <Slide index={3}>
          <Card
            jobTitle={t('portfolioPage:jobTitle-1')}
            description={t('portfolioPage:ctc-description')}
            image="/portfolio/ctc.png"
            skills={[
              'HTML',
              'CSS',
              'JQuery',
              'Php',
              'Laravel',
              'Bootstrap',
              'sql',
              'SQL Server',
            ]}
          />
        </Slide>
        <Slide index={4}>
          <Card
            jobTitle={t('portfolioPage:jobTitle-3')}
            description={t('portfolioPage:blida-description')}
            image="/portfolio/chicken1.webp"
            skills={['UML', 'JAVA', 'Jasper Reports', 'MySql', 'Sql']}
          />
        </Slide>
      </Slider>
      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <img src="/portfolio/arrow.svg" alt="arrow" />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <img src="/portfolio/arrow.svg" alt="arrow" />
        </ButtonNext>
      </div>
    </Box>
  );
};

export default CarouselSlider;
