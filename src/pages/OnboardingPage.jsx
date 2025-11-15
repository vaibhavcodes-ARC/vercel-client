import React from 'react';
import { Link } from 'react-router-dom';

const OnboardingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">Welcome to VibeLink 🎉</h1>
        <p className="text-gray-700 mb-6">Let's get you set up. This short onboarding helps new users configure their profile and discover the main features.</p>

        <section className="space-y-4">
          <div className="p-4 border border-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">1. Create your profile</h2>
            <p className="text-sm text-gray-600 mt-1">Pick a username and avatar so others can find you. You can edit this later.</p>
          </div>

          <div className="p-4 border border-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">2. Post your first vibe</h2>
            <p className="text-sm text-gray-600 mt-1">Share a short message to introduce yourself to the community.</p>
          </div>

          <div className="p-4 border border-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">3. Follow a few people</h2>
            <p className="text-sm text-gray-600 mt-1">Follow creators, friends, or topics to build your feed.</p>
          </div>
        </section>

        <div className="mt-6 flex gap-3">
          <Link to="/auth" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium">Create Account</Link>
          <Link to="/feed" className="px-6 py-3 border border-gray-200 rounded-lg">Skip for now</Link>
        </div>

        <p className="text-sm text-gray-500 mt-4">Tip: complete your profile to get better recommendations.</p>
      </div>
    </div>
  );
};

export default OnboardingPage;
