import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProfilePage = () => {
  const { username } = useParams();
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-center">
      <div className="p-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-indigo-600">@{username}</h2>
        <p className="mt-4 text-xl text-gray-700">This is the profile page for <strong>{username}</strong>.</p>
        <p className="mt-2 text-gray-500">(User posts and bio would appear here in a full app.)</p>
        <Link to="/feed" className="mt-6 inline-block text-indigo-500 hover:text-indigo-700">&larr; Back to Feed</Link>
      </div>
    </div>
  );
};

export default ProfilePage;
