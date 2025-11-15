import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate('/auth');
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading || !isAuthenticated) return <div className="text-center mt-20">Authorizing...</div>;
  return children;
};

export default ProtectedRoute;
