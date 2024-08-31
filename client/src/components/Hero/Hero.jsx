import React from 'react';
import Hero_Img from '../../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative">
      {/* Main container to ensure everything is centered */}
      <div className="container flex flex-col-reverse items-center gap-12 px-4 mx-auto lg:flex-row mt-14 lg:mt-28 lg:px-0">
        {/* Text and button section */}
        <div className="flex flex-col items-center flex-1 text-center lg:items-start lg:text-left">
          <h2 className="mb-6 text-3xl text-bookmark-blue md:text-4xl lg:text-5xl">
          Personalized Learning Experience
          </h2>
          <p className="mb-6 text-lg text-bookmark-grey">
          Our adaptive quiz platform tailors questions to your skill level and tracks your progress. Improve your understanding with personalized feedback and insights.
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              Start Your Quiz
            </button>
            <button
              type="button"
              className="btn btn-white hover:bg-bookmark-purple hover:text-white"
            >
              Learn More
            </button>
          </div>
        </div>
        {/* Image section */}
        <div className="z-10 flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={Hero_Img}
            alt="Hero"
          />
        </div>
      </div>
      {/* Decorative purple background shape */}
      <div className="absolute right-0 hidden w-2/4 overflow-hidden rounded-l-full md:block bg-bookmark-purple h-80 top-32 lg:-bottom-28 lg:-right-36"></div>
    </section>
  );
};

export default Hero;
