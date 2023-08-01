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
            description="I have been working for Siemens Energy Canada as a full-stack developer on a big project for testing transformers. 
            During this project, I was able to learn more and practice my knowledge at work"
            image="/portfolio/siemens-energy.png"
          />
        </Slide>
        <Slide index={2}>
          <Card
            company="KAAYU TECHNOLOGIE"
            description="I worked for Kaayu Technologies as a front-end developer using the Next.js framework. It was my first time using React.js and also my first experience in Canada. 
            I loved this framework so much that I continued to work with it until now."
            image="/portfolio/kaayu.jpg"
          />
        </Slide>
        <Slide index={3}>
          <Card
            company="CTC Algeria"
            description="I worked for CTC Etatique company in Algeria as a full-stack developer using PHP and jQuery. 
            That experience was my first web development experience."
            image="/portfolio/ctc.png"
          />
        </Slide>
        <Slide index={4}>
          <Card
            company="Breeding Center Blida"
            description="I worked for a breeding center in Blida, Algeria as a Java desktop developer.
             I worked on an ERP project for the company."
            image="/portfolio/chicken1.webp"
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
