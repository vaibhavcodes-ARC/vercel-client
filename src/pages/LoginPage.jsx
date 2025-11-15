import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <AuthForm type="login" />
    </div>
  );
};

export default LoginPage;
