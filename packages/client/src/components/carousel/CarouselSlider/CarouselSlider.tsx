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

const CarouselSlider = ({ setSlideCount, setCurrentSlide }: any) => {
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
            company="Zenika"
            description="I worked as a full-stack developer consultant at Zenika Canada and
            have worked for both internal and external clients. During my time
            there, I learned new skills and obtained certifications."
            image="/portfolio/zenika.png"
          />
        </Slide>
        <Slide index={1}>
          <Card
            company="Siemens Energy"
            description="I worked as a full-stack developer consultant at Zenika Canada and
            have worked for both internal and external clients. During my time
            there, I learned new skills and obtained certifications."
            image="/portfolio/siemens-energy.png"
          />
        </Slide>
        <Slide index={2}>
          <Card
            company="KAAYU TECHNOLOGIE"
            description="I worked as a full-stack developer consultant at Zenika Canada and
            have worked for both internal and external clients. During my time
            there, I learned new skills and obtained certifications."
            image="/portfolio/kaayu.jpg"
          />
        </Slide>
        <Slide index={3}>
          <Card
            company="CTC Algeria"
            description="I worked as a full-stack developer consultant at Zenika Canada and
            have worked for both internal and external clients. During my time
            there, I learned new skills and obtained certifications."
            image="/portfolio/ctc.png"
          />
        </Slide>
        <Slide index={4}>
          <Card
            company="Breeding Center Blida"
            description="I worked as a full-stack developer consultant at Zenika Canada and
            have worked for both internal and external clients. During my time
            there, I learned new skills and obtained certifications."
            image="/portfolio/chicken.webp"
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
