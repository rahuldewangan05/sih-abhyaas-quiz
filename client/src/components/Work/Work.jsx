import React from 'react';
import workImg from '../../assets/work.svg';

const Work = () => {
  return (
    <section id="how-it-works" className="py-20 mt-20">
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <div className="px-2 mx-auto text-center sm:w-3/4 lg:w-5/12">
          <h3 className="text-3xl text-bookmark-blue">How It Works</h3>
          <p className="mt-4 text-bookmark-grey">
            Our adaptive learning platform is designed to personalize your learning journey based on your performance and feedback.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col items-center gap-12 mt-16 lg:flex-row">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={workImg}
              alt="How It Works"
              className="w-5/6 h-auto"
            />
          </div>

          {/* Steps Explanation */}
          <div className="flex-1">
            <div className="mb-8">
              <h4 className="mb-4 text-xl font-bold text-bookmark-blue">Step 1: Take a Quiz</h4>
              <p className="text-bookmark-grey">
                Begin your learning journey by taking a quiz to assess your current knowledge level. Our algorithm will tailor questions based on your responses.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-xl font-bold text-bookmark-blue">Step 2: Get Feedback</h4>
              <p className="text-bookmark-grey">
                Receive instant feedback with detailed insights into your strengths and areas for improvement. Our reports are designed to help you understand where to focus your efforts.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-bookmark-blue">Step 3: Improve</h4>
              <p className="text-bookmark-grey">
                Utilize the feedback to enhance your skills. The platform adapts as you progress, providing increasingly challenging material to ensure continuous growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
