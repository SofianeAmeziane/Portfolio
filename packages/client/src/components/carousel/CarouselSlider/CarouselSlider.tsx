import React, { FC, useContext, useEffect, useState } from 'react';
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
import portfolios from './portfolios.json';

interface ICarouselSlider {
  setSlideCount: any;
  setCurrentSlide: any;
}

interface IJobExperience {
  id: number;
  jobTitle: string;
  description: string;
  image: string;
  skills: string[];
}

const CarouselSlider: FC<ICarouselSlider> = ({
  setSlideCount,
  setCurrentSlide,
}) => {
  const { t } = useTranslation();
  const screenWidth = useWindowSize();
  const carouselContext = useContext(CarouselContext);
  const [experience, setexperience] = useState([]);

  const getPortfolios = async () => {
    const response = await fetch('http://localhost:4000/portfolios');
    const portfolios = await response.json();
    setexperience(portfolios);
  };
  useEffect(() => {
    getPortfolios();
  }, []);

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
    } else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <Box>
      <Slider>
        {portfolios.map((job: IJobExperience) => {
          return (
            <Slide key={job.id} index={job.id} className="slide">
              <Card
                jobTitle={t(`portfolioPage:${job.jobTitle}`)}
                description={t(`portfolioPage:${job.description}`)}
                image={job.image}
                skills={job.skills}
              />
            </Slide>
          );
        })}
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
