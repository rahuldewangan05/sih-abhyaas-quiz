import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { ArrowRight } from 'lucide-react';
import Logo from '../../assets/logo.png';

const Signup = () => {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log(response);
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const handleFailure = (error) => {
    console.error(error);
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src={Logo} alt="Signup Logo" width="200px" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-bookmark-blue">
            Sign up to create an account
          </h2>
          <p className="mt-2 text-center text-sm text-bookmark-grey">
            Already have an account?{' '}
            <Link
              to="/"
              className="font-semibold text-bookmark-blue transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-bookmark-blue"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-bookmark-blue focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-bookmark-blue"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-bookmark-blue focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-base font-medium text-bookmark-blue"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-bookmark-blue focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-bookmark-purple px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-bookmark-blue/90"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleFailure}
              logo={Logo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
