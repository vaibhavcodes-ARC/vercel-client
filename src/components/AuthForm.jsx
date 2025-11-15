import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login as apiLogin, register as apiRegister } from '../api';

const AuthForm = ({ type = 'login' }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const isLogin = type === 'login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!email || !password || (!isLogin && !username)) {
      setError('All fields are required.');
      return;
    }

    try {
      if (isLogin) {
        const res = await apiLogin(email, password);
        handleLogin(res, res.token);
        navigate('/feed');
      } else {
        const res = await apiRegister(username, email, password);
        setSuccessMessage('Registration successful! Redirecting...');
        handleLogin(res, res.token);
        // After signup, send user to onboarding to finish setup
        setTimeout(() => navigate('/onboarding'), 600);
      }
    } catch (err) {
      // Prefer detailed server message when available, fallback to HTTP status or generic message
      const serverMessage = err?.response?.data?.message;
      const status = err?.response?.status;
      const fallback = err?.message || 'Server error';
      setError(serverMessage || (status ? `Request failed with status code ${status}` : fallback));
      console.error('AuthForm error:', err);
    }
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">{isLogin ? 'Login to VibeLink' : 'Sign Up for VibeLink'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">{error}</div>}
        {successMessage && <div className="p-3 text-sm text-green-700 bg-green-100 rounded-lg">{successMessage}</div>}
        {!isLogin && (
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full px-4 py-3 border rounded-lg" />
        )}
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-3 border rounded-lg" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 border rounded-lg" />
        <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
