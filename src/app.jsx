// client/App.jsx - Single file for the entire React application
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';
import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage';
import OnboardingPage from './pages/OnboardingPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/feed" element={<ProtectedRoute><FeedPage /></ProtectedRoute>} />
            <Route path="/profile/:username" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </AuthProvider>
    </Router>
  );
};

export default App;
