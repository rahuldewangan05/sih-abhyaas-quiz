import React from "react";
import { ArrowRight } from "lucide-react";
import Logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";
import { auth, provider, signInWithPopup } from "../firebase";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(
        login({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        })
      );

      navigate("/home");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Handle login with email and password
  const handleMongoLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      if (response.status === 200) {
        const { token, user } = response.data;

        // Store the token in local storage
        localStorage.setItem("jwtToken", token);

        // Dispatch login action
        dispatch(
          login({ uid: user.id, fullName: user.fullName, email: user.email })
        );

        navigate("/home");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex justify-center mb-2">
            {/* Logo */}
            <img src={Logo} alt="Signin Logo" width="200px" />
          </div>
          <h2 className="text-2xl font-bold leading-tight text-center text-bookmark-blue">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-bookmark-grey">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold transition-all duration-200 text-bookmark-blue hover:underline"
            >
              Create a free account
            </Link>
          </p>
          <form action="#" method="POST" className="mt-8">
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
                    placeholder="Email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-bookmark-blue"
                  >
                    Password
                  </label>
                  <Link
                    to="/forgot-password" // Update with the route you want to navigate to
                    title="Forgot password?"
                    className="text-sm font-semibold text-bookmark-blue hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-bookmark-blue focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleMongoLogin}
                  className="inline-flex w-full items-center justify-center rounded-md bg-bookmark-purple px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-bookmark-blue/90"
                >
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="inline-block mr-2">
                <svg
                  className="w-6 h-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
