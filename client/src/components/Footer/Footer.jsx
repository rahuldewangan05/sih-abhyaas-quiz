import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className="relative py-8 overflow-hidden bg-white">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between -m-8">
          <div className="w-auto p-8">
            <a href="/">
              <div className="inline-flex items-center">
                {/* Replace with your logo SVG or image */}
                <img src={Logo} alt="Logo" width="80px" />
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            <ul className="flex flex-wrap items-center -m-5">
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="/terms-of-service"
                >
                  Terms of Service
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="/return-policy"
                >
                  Return Policy
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="/contact-us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <a href="https://facebook.com" aria-label="Facebook">
                  <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:border-gray-400">
                    {/* Facebook Icon */}
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                        fill="#27272A"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="https://twitter.com" aria-label="Twitter">
                  <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:border-gray-400">
                    {/* Twitter Icon */}
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.795 0.800003C14.0566 1.184 13.2573 1.452 12.4138 1.588C11.8335 0.996 11.0482 0.666668 10.1962 0.666668C8.56677 0.666668 7.2466 1.976 7.2466 3.58C7.2466 3.86 7.2797 4.128 7.34515 4.384C4.8768 4.256 2.7353 3.14 1.313 1.444C1.0341 1.928 0.877951 2.496 0.877951 3.104C0.877951 4.252 1.48415 5.256 2.3937 5.824C1.7253 5.808 1.09015 5.616 0.556225 5.312C0.556225 5.32 0.556225 5.332 0.556225 5.344C0.556225 6.876 1.6938 8.136 3.1934 8.444C2.92555 8.516 2.6379 8.552 2.34115 8.552C2.13405 8.552 1.93065 8.536 1.73355 8.496C2.1416 9.728 3.34475 10.616 4.76975 10.64C3.6532 11.46 2.2692 11.944 0.766625 11.944C0.508825 11.944 0.256475 11.932 0 11.904C1.4404 12.776 3.1466 13.28 4.98685 13.28C10.1904 13.28 13.2146 8.6 13.2146 4.004C13.2146 3.86 13.2109 3.716 13.2034 3.572C13.9448 3.044 14.579 2.38 15.0828 1.62L14.795 0.800003Z"
                        fill="#27272A"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="https://www.instagram.com" aria-label="Instagram">
                  <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:border-gray-400">
                    {/* Instagram Icon */}
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                        fill="#27272A"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
