import React from 'react';
import AuthForm from '../components/AuthForm';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <AuthForm type="register" />
    </div>
  );
};

export default SignupPage;
