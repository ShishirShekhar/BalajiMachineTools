import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page not found</p>
      <p className="text-lg mb-8">
        The page you are looking for might be in another castle. Go back{" "}
        <Link to="/" className="text-blue-500 underline">
          Home
        </Link>
        .
      </p>
      <img
        src="https://i.gifer.com/7VE.gif"
        alt="Page Not Found"
        className="max-w-full"
      />
    </div>
  );
};

export default NotFound;
