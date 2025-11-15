import React, { useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const view = query.get('view') === 'register' ? 'register' : 'login';

  useEffect(() => {
    if (isAuthenticated) navigate('/feed');
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
      <AuthForm type={view} />
    </div>
  );
};

export default AuthPage;
