import React from "react";
import { Link } from "react-router-dom";

const Not_Found: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <img
            className="mx-auto h-48 w-auto"
            src="https://illustrations.popsy.co/gray/falling.svg"
            alt="404 Illustration"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Oops! Page not found
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            The page you're looking for doesn't exist, but Hey 👋, I got you!
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-white text-sm font-medium rounded-md bg-gradient-to-r from-blue-gray-300 to-gray-400"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Not_Found;
