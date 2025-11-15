import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center mt-20">
    <h1 className="text-6xl font-extrabold text-red-500">404</h1>
    <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
    <Link to="/" className="mt-6 inline-block text-indigo-600 hover:underline">Go Home</Link>
  </div>
);

export default NotFoundPage;
