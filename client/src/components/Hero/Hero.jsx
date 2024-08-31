import React from 'react';
import Hero_Img from '../../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative">
      {/* Main container to ensure everything is centered */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 px-4 lg:px-0">
        {/* Text and button section */}
        <div className="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-bookmark-blue text-3xl md:text-4xl lg:text-5xl mb-6">
          Personalized Learning Experience
          </h2>
          <p className="text-bookmark-grey text-lg mb-6">
          Our adaptive quiz platform tailors questions to your skill level and tracks your progress. Improve your understanding with personalized feedback and insights.
          </p>
          <div className="flex justify-center lg:justify-start flex-wrap gap-6">
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
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={Hero_Img}
            alt="Hero"
          />
        </div>
      </div>
      {/* Decorative purple background shape */}
      <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
    </section>
  );
};

export default Hero;
