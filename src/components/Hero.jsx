import React from 'react';
import stikes from '../assets/stikes.png';
import ukws from '../assets/ukws.png';
import umy from '../assets/umy.png';
import unimugo from '../assets/unimugo.png';
import Button from './Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';


const Hero = () => {
  return (
    <div id="hero" className="w-full max-w-[1440px] h-[500px] mx-[auto] px-5 md:px-10">
      {/* Headline & Subheading */}
      <div className="max-w-[1055px] mt-10 md:mt-[93px] text-center md:text-left">
        <h1 className="poppins-bold text-3xl md:text-5xl">
          Membangun jalinan <br /> komunitas penelitian
        </h1>
        <h2 className="poppins-regular text-[#828282] md:text-2xl mt-[44px]">
          Selamat datang di jaringan komunitas akademik, tempat untuk mempererat <br />
          kerjasama dalam menjalankan Tri Dharma Perguruan Tinggi di seluruh Indonesia.
        </h2>
      </div>

      <div className="mt-[55px] flex flex-col md:flex-row items-center justify-between">
        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="primary" size="hero" className="gap-2">
            Coba Gratis
            <AiOutlineArrowRight />
          </Button>
          <RouterLink to="/contact">
            <Button variant="secondary" size="hero">
              Contact Us
            </Button>
          </RouterLink>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center md:justify-center gap-6 mt-6 md:mt-0">
          <img className="w-[60px] lg:w-[85px] h-auto" src={umy} alt="umy" />
          <img className="w-[60px] lg:w-[80px] h-auto" src={unimugo} alt="unimugo" />
          <img className="w-[75px] lg:w-[94px] h-auto" src={stikes} alt="stikes" />
          <img className="w-[60px] lg:w-[80px] h-auto" src={ukws} alt="ukws" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
