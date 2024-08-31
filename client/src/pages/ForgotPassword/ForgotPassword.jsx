import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Replace with your API endpoint
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send password reset instructions.");
      }

      setIsSubmitted(true);
      navigate("/verify-otp");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex justify-center mb-2">
            <img src={Logo} alt="Forgot Password Logo" width="200px" />
          </div>
          <h2 className="text-2xl font-bold leading-tight text-center text-bookmark-blue">
            Forgot Password
          </h2>
          <p className="mt-2 text-base text-center text-bookmark-grey">
            Enter your email address to receive password reset instructions.
          </p>
          <form
            action="#"
            method="POST"
            className="mt-8"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-bookmark-blue"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-bookmark-blue focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Link
                  to="/verify-otp"
                  className="inline-flex w-full items-center justify-center rounded-md bg-bookmark-purple px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-bookmark-purple/80"
                >
                  Send Reset Instructions{" "}
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </form>
          {isSubmitted && (
            <div className="mt-4 text-center">
              <p className="text-base text-bookmark-grey">
                If an account exists for {email}, you will receive password
                reset instructions.
              </p>
            </div>
          )}
          {error && (
            <div className="mt-4 text-center">
              <p className="text-base text-red-600">{error}</p>
            </div>
          )}
          <div className="mt-4 text-center">
            <a
              href="/signin"
              className="inline-flex items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-bookmark-blue transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="inline-block mr-2">
                <svg
                  className="w-6 h-6 text-bookmark-blue"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3V1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2H6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4v2H6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2v2H6a1 1 0 0 0-1 1v2h6v-2h2v2h6v-2a1 1 0 0 0-1-1h-2v-2h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-4v-2h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2z" />
                </svg>
              </span>
              Back to Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
