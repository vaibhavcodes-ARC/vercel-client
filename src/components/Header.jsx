import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, handleLogout, user } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/auth');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-4xl">
        <Link to="/" className="text-2xl font-bold text-indigo-600">VibeLink</Link>
        <nav>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">Welcome, {user?.username}</span>
              <Link to="/feed" className="text-gray-600 hover:text-indigo-600 font-medium">Feed</Link>
              <button onClick={onLogout} className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600">Logout</button>
            </div>
                    ) : (
            <Link to="/login" className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700">Login / Sign Up</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
