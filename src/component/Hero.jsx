import { Carousel } from "flowbite-react";
import React from "react";
import Img1 from '../assets/img1.jpg'

const Hero = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={Img1} alt="..." />
        <img src="" alt="..." />
        <img src="" alt="..." />
        <img src="" alt="..." />
      </Carousel>
    </div>
  );
};

export default Hero;
