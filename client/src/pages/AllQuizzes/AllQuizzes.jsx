import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function AllQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch quizzes from your backend
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    // Replace this with actual API call
    try {
      // const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // setQuizzes(data);
      setQuizzes([
        {
          id: 1,
          title: "Number Series",
          difficulty: "Beginner",
          questionsNum: 10,
        },
        { id: 2, title: "Geometry", difficulty: "Beginner", questionsNum: 15 },
        {
          id: 3,
          title: "Trigonometry",
          difficulty: "Intermediate",
          questionsNum: 20,
        },
        // Add more sample quizzes...
      ]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      setLoading(false);
    }
  };

  const startQuiz = (quizId) => {
    // Navigate to the QuizPage component
    navigate(`/quiz/${quizId}`);
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-bookmark-grey">
        Loading quizzes...
      </div>
    );
  }

  return (
    <section className="py-10 mt-5 bg-bookmark-white">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 text-3xl text-center text-bookmark-blue md:text-4xl lg:text-5xl">
          Available Quizzes
        </h1>
        <p className="mb-12 text-lg text-center text-bookmark-grey">
          Choose from a variety of quizzes tailored to your skill level.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl text-bookmark-blue">{quiz.title}</h2>
              <p className="mb-2 text-bookmark-grey">
                Difficulty: {quiz.difficulty}
              </p>
              <p className="mb-4 text-bookmark-grey">
                Questions: {quiz.questionsNum}
              </p>
              <button
                onClick={() => startQuiz(quiz.id)}
                className="w-full btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllQuizzes;
