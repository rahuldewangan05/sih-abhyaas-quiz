import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
// import Hero from "../../components/Hero/Hero";
// import Features from "../../components/Features/Features";
// import Work from "../../components/Work/Work";
import Hero_Img from "../../assets/hero-bg.png";
import feature1_img from "../../assets/questions.svg";
import feature2_img from "../../assets/userStats.svg";
import feature3_img from "../../assets/leaderboard.svg";
import workImg from "../../assets/work.svg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <section className="relative">
        {/* Main container to ensure everything is centered */}
        <div className="container flex flex-col-reverse items-center gap-12 px-4 mx-auto lg:flex-row mt-14 lg:mt-28 lg:px-0">
          {/* Text and button section */}
          <div className="flex flex-col items-center flex-1 text-center lg:items-start lg:text-left">
            <h2 className="mb-6 text-3xl text-bookmark-blue md:text-4xl lg:text-5xl">
              Personalized Learning Experience
            </h2>
            <p className="mb-6 text-lg text-bookmark-grey">
              Our adaptive quiz platform tailors questions to your skill level
              and tracks your progress. Improve your understanding with
              personalized feedback and insights.
            </p>
            <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
              <Link
                to="/initial-quiz"
                className="inline-block text-center btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Start Your Quiz
              </Link>
              <Link
                to="/quizzes"
                className="btn btn-white hover:bg-bookmark-purple hover:text-white"
              >
                All Quizzes
              </Link>
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
      {/* <Features /> */}
      <section className="py-20 mt-20 bg-bookmark-white lg:mt-60">
        {/* Heading */}
        <div className="max-w-screen-lg px-4 mx-auto">
          <h1 className="text-3xl text-center text-bookmark-blue">
            Platform Features
          </h1>
          <p className="mt-4 text-center text-bookmark-grey">
            Our adaptive learning platform provides a personalized quiz
            experience, tailored to each student's unique needs. Monitor
            performance and progress with detailed analytics.
          </p>
        </div>

        {/* Feature #1 */}
        <div className="relative m-20 lg:mt-24">
          <div className="container flex flex-col items-center justify-center px-4 mx-auto lg:flex-row gap-x-24">
            {/* Image */}
            <div className="z-10 flex justify-center flex-1 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={feature1_img}
                alt="Adaptive Quiz"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col items-center flex-1 lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Adaptive Quiz Generation
              </h1>
              <p className="my-4 text-center text-bookmark-grey lg:text-left sm:w-3/4 lg:w-full">
                Generate quizzes that adapt to each student's learning pace and
                performance. Questions are selected based on accuracy and
                response time, ensuring a tailored learning experience.
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div className="absolute hidden w-2/4 overflow-hidden rounded-r-full lg:block bg-bookmark-purple h-80 -bottom-24 -left-36"></div>
        </div>

        {/* Feature #2 */}
        <div className="relative m-20 lg:mt-52">
          <div className="container flex flex-col items-center justify-center px-4 mx-auto lg:flex-row-reverse gap-x-24">
            {/* Image */}
            <div className="z-10 flex justify-center flex-1 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={feature2_img}
                alt="Detailed Reports"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col items-center flex-1 lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Detailed Performance Reports
              </h1>
              <p className="my-4 text-center text-bookmark-grey lg:text-left sm:w-3/4 lg:w-full">
                Get insights into each student's performance with detailed
                reports. Analyze strengths and weaknesses, and track progress
                over time to provide targeted feedback.
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                View Reports
              </button>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div className="absolute hidden w-2/4 overflow-hidden rounded-l-full lg:block bg-bookmark-purple h-80 -bottom-24 -right-36"></div>
        </div>

        {/* Feature #3 */}
        <div className="relative m-20 lg:mt-52">
          <div className="container flex flex-col items-center justify-center px-4 mx-auto lg:flex-row gap-x-24">
            {/* Image */}
            <div className="z-10 flex justify-center flex-1 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={feature3_img}
                alt="Global Statistics"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col items-center flex-1 lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Global Performance Statistics
              </h1>
              <p className="my-4 text-center text-bookmark-grey lg:text-left sm:w-3/4 lg:w-full">
                Track and compare performance across different cohorts with
                global statistics. Identify trends and make data-driven
                decisions to improve the learning experience.
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Explore Stats
              </button>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div className="absolute hidden w-2/4 overflow-hidden rounded-r-full lg:block bg-bookmark-purple h-80 -bottom-24 -left-36"></div>
        </div>
      </section>
      {/* <Work /> */}
      <section id="how-it-works" className="py-20 mt-20">
        <div className="container px-4 mx-auto">
          {/* Section Heading */}
          <div className="px-2 mx-auto text-center sm:w-3/4 lg:w-5/12">
            <h3 className="text-3xl text-bookmark-blue">How It Works</h3>
            <p className="mt-4 text-bookmark-grey">
              Our adaptive learning platform is designed to personalize your
              learning journey based on your performance and feedback.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col items-center gap-12 mt-16 lg:flex-row">
            {/* Image Section */}
            <div className="flex-1">
              <img src={workImg} alt="How It Works" className="w-5/6 h-auto" />
            </div>

            {/* Steps Explanation */}
            <div className="flex-1">
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-bookmark-blue">
                  Step 1: Take a Quiz
                </h4>
                <p className="text-bookmark-grey">
                  Begin your learning journey by taking a quiz to assess your
                  current knowledge level. Our algorithm will tailor questions
                  based on your responses.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-bookmark-blue">
                  Step 2: Get Feedback
                </h4>
                <p className="text-bookmark-grey">
                  Receive instant feedback with detailed insights into your
                  strengths and areas for improvement. Our reports are designed
                  to help you understand where to focus your efforts.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-bold text-bookmark-blue">
                  Step 3: Improve
                </h4>
                <p className="text-bookmark-grey">
                  Utilize the feedback to enhance your skills. The platform
                  adapts as you progress, providing increasingly challenging
                  material to ensure continuous growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
