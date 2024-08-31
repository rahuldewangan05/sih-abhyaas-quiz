import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OTPBox = ({ index, value, onChange }) => {
  const handleChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) { // Allow only digits
      onChange(index, val);
    }
  };

  return (
    <input
      type="text"
      maxLength="1"
      value={value}
      onChange={handleChange}
      className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
    />
  );
};

const ForgotOtpVerify = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Automatically focus on the next box
    if (index < 5 && value) {
      document.getElementById(`otp-box-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    console.log('OTP entered:', otpString);

    // Call API to verify OTP
    try {
      const response = await axios.post('/api/auth/verify-otp', { otp: otpString });
      if (response.status === 200) {
        setIsVerified(true);
        navigate('/reset-password'); // Redirect to reset password page
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold leading-tight text-center text-black">
          Verify Your OTP
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Enter the OTP sent to your email to verify your account.
        </p>
        {!isVerified ? (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex justify-between mb-6">
              {otp.map((value, index) => (
                <OTPBox
                  key={index}
                  index={index}
                  value={value}
                  onChange={handleOtpChange}
                  id={`otp-box-${index}`}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-bookmark-purple px-4 py-2.5 font-semibold leading-6 text-white hover:bg-black/80"
            >
              Verify OTP <ArrowRight className="ml-2" size={16} />
            </button>
          </form>
        ) : (
          <div className="p-4 mt-6 bg-white border border-gray-300 rounded-md">
            <p className="text-center text-gray-800">
              OTP verified successfully. You can now{' '}
              <Link to="/reset-password" className="text-purple-600 hover:underline">
                reset your password
              </Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotOtpVerify;

