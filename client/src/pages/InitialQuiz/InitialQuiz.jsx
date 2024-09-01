import React, { useState } from "react";
import QuizResult from "./QuizResult";
import { questions } from "./questions";

const InitialQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setUserAnswers([...userAnswers, selectedOption]);
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setCorrectAnswersCount(correctAnswersCount + 1);
      }
      setSelectedOption(null); // Reset selected option
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizComplete(true); // Mark the quiz as complete
      }
    } else {
      console.log(
        "Please select an option before proceeding to the next question."
      );
    }
  };

  if (quizComplete) {
    // Render the QuizResult component with the results
    return (
      <QuizResult
        correctAnswersCount={correctAnswersCount}
        totalQuestions={questions.length}
      />
    );
  }

  return (
    <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-md initial-quiz-container">
      <h1 className="mb-4 text-3xl text-center text-bookmark-blue">
        Initial Assessment Quiz
      </h1>
      <p className="mb-6 text-lg text-center text-bookmark-grey">
        This quiz will help us understand your current knowledge level.
      </p>

      <div className="question-container">
        <h2 className="mb-4 text-xl text-bookmark-blue">
          Question {currentQuestion + 1}
        </h2>
        <p className="mb-6 text-lg text-bookmark-grey">
          {questions[currentQuestion].question}
        </p>
        <div className="mb-4 space-y-4 options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full py-3 px-4 rounded-lg shadow-md ${
                selectedOption === option
                  ? "bg-bookmark-purple text-white"
                  : "bg-white text-bookmark-grey"
              } hover:bg-bookmark-lightpurple`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="text-right">
          <button
            onClick={handleNext}
            className="px-3 py-2 text-white rounded-lg shadow-md bg-bookmark-blue hover:bg-bookmark-darkblue"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialQuiz;

