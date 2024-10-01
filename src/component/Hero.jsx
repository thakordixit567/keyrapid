import { Carousel } from "flowbite-react";
import React from "react";
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'

const Hero = () => {
  return (
    <div className=" h-64 w-11/12sm:h-64 xl:h-80 2xl:h-96 md:pt-5">
      <Carousel slideInterval={5000}>
        <img src={Img1} alt="..." />
        <img src={Img2} alt="..." />
        <img src={Img3} alt="..." />
        <img src={Img4} alt="..." />
      </Carousel>
    </div>
  );
};

export default Hero;
