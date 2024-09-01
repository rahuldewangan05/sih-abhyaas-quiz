import React from "react";

function QuizResult({ correctAnswersCount, totalQuestions }) {
  const accuracy = ((correctAnswersCount / totalQuestions) * 100).toFixed(2);

  return (
    <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-md quiz-result-container">
      <h1 className="mb-4 text-3xl text-center text-bookmark-blue">
        Quiz Report Card
      </h1>
      <p className="mb-6 text-lg text-center text-bookmark-grey">
        Here is a summary of your quiz performance.
      </p>

      <div className="text-center">
        <p className="mb-4 text-xl text-bookmark-blue">
          Correct Answers: {correctAnswersCount} / {totalQuestions}
        </p>
        <p className="mb-4 text-xl text-bookmark-blue">Accuracy: {accuracy}%</p>
      </div>

      <div className="text-center">
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-white rounded-lg shadow-md bg-bookmark-blue hover:bg-bookmark-darkblue"
        >
          Retry Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizResult;
