import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function QuizPage() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    fetchQuizDetails();
  }, [quizId]);

  const fetchQuizDetails = async () => {
    try {
      // Sample data for illustration
      setQuiz({
        id: quizId,
        title: "Aptitude Quiz",
        description: "Test your knowledge on various topics",
        questions: [
          { id: 1, question: "What is the largest planet in our solar system?", options: ["Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
          { id: 2, question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Ernest Hemingway", "John Steinbeck"], answer: "Harper Lee" }
        ]
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quiz details:", error);
      setLoading(false);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setUserAnswers([...userAnswers, selectedOption]);
      setSelectedOption(null);
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizComplete(true);
      }
    }
  };

  const calculateScore = () => {
    return userAnswers.filter((answer, index) => answer === quiz.questions[index].answer).length;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="p-8 text-2xl font-bold text-white animate-pulse">
          Loading quiz...
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="p-8 text-2xl font-bold text-white">
          Quiz not found.
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const score = calculateScore();
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-blue-600">Quiz Complete!</h2>
          <p className="mb-4 text-xl text-gray-700">
            You scored {score} out of {quiz.questions.length}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container px-4 py-10 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-white md:text-5xl">
          {quiz.title}
        </h1>
        <p className="mb-12 text-xl text-center text-white">
          {quiz.description}
        </p>
        <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </h2>
          <p className="mb-6 text-xl text-gray-700">{quiz.questions[currentQuestion].question}</p>
          <div className="space-y-4">
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full p-4 text-left transition-colors rounded-lg ${
                  selectedOption === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-8 text-right">
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`px-6 py-2 text-white rounded-full ${
                selectedOption === null
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {currentQuestion < quiz.questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;