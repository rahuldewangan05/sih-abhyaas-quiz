import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./auth/LogIn/Login";
import Signup from "./auth/SignUp/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import VerifyOtp from "./pages/ForgotOtpVerify/ForgotOtpVerify";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Layout from "./Layout";
// import Resources from "./pages/Resources/Resources";
import InitialQuiz from "./pages/InitialQuiz/InitialQuiz";
import AllQuizzes from "./pages/AllQuizzes/AllQuizzes";
import Performance from "./pages/Performance/Performance";
import QuizPage from './pages/QuizPage/QuizPage'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/initial-quiz" element={<InitialQuiz />} />
          <Route path="/quizzes" element={<AllQuizzes />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          
          {/* Nested routes for specific resource categories
          <Route path="/quizzes/adaptive" element={<AdaptiveQuiz />} />
          <Route path="/quizzes/topics" element={<TopicBasedQuizzes />} />
          <Route path="/quizzes/practice-tests" element={<PracticeTests />} />
          
          <Route path="/materials/study-guides" element={<StudyGuides />} />
          <Route path="/materials/video-lessons" element={<VideoLessons />} />
          <Route path="/materials/exercises" element={<InteractiveExercises />} />
          
          <Route path="/performance/dashboard" element={<PerformanceDashboard />} />
          <Route path="/performance/analytics" element={<DetailedAnalytics />} />
          <Route path="/performance/reports" element={<PersonalizedReports />} />
          
          <Route path="/community/forums" element={<DiscussionForums />} />
          <Route path="/community/study-groups" element={<StudyGroups />} />
          <Route path="/community/expert-help" element={<AskAnExpert />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;