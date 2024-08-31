import React from 'react';
import feature1_img from '../../assets/questions.svg';
import feature2_img from '../../assets/userStats.svg';
import feature3_img from '../../assets/leaderboard.svg';

const Features = () => {
  return (
    <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
      {/* Heading */}
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl text-center text-bookmark-blue">Platform Features</h1>
        <p className="text-center text-bookmark-grey mt-4">
          Our adaptive learning platform provides a personalized quiz experience, tailored to each student's unique needs. Monitor performance and progress with detailed analytics.
        </p>
      </div>

      {/* Feature #1 */}
      <div className="relative m-20 lg:mt-24">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-24 px-4">
          {/* Image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={feature1_img}
              alt="Adaptive Quiz"
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmark-blue">Adaptive Quiz Generation</h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Generate quizzes that adapt to each student's learning pace and performance. Questions are selected based on accuracy and response time, ensuring a tailored learning experience.
            </p>
            <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">Learn More</button>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
      </div>

      {/* Feature #2 */}
      <div className="relative m-20 lg:mt-52">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24 px-4">
          {/* Image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={feature2_img}
              alt="Detailed Reports"
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmark-blue">Detailed Performance Reports</h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Get insights into each student's performance with detailed reports. Analyze strengths and weaknesses, and track progress over time to provide targeted feedback.
            </p>
            <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">View Reports</button>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36"></div>
      </div>

      {/* Feature #3 */}
      <div className="relative m-20 lg:mt-52">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-24 px-4">
          {/* Image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={feature3_img}
              alt="Global Statistics"
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmark-blue">Global Performance Statistics</h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Track and compare performance across different cohorts with global statistics. Identify trends and make data-driven decisions to improve the learning experience.
            </p>
            <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">Explore Stats</button>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
      </div>
    </section>
  );
};

export default Features;
