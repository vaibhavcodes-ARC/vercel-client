import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const WelcomePage = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen-minus-header bg-gray-50 text-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-4">VibeLink</h1>
        <p className="text-xl text-gray-700 mb-8">The minimalist microblogging platform for sharing short, pure vibes.</p>
        {isAuthenticated ? (
          <>
            <p className="text-lg text-green-600 font-semibold mb-4">You are logged in as <strong>@{user.username}</strong>!</p>
            <Link to="/feed" className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-bold rounded-xl">Go to Your Feed</Link>
          </>
        ) : (
          <Link to="/signup" className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-bold rounded-xl">Get Started</Link>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
