import React, { useState } from 'react';
import { createPost } from '../api';
import { useAuth } from '../context/AuthContext';

const PostForm = ({ onPostCreated = () => {} }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (content.trim().length === 0) {
      setError('Post content cannot be empty.');
      return;
    }
    setIsSubmitting(true);
    try {
      await createPost(content, token);
      setContent('');
      onPostCreated();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to create post.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg mb-8 border border-gray-100">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Share a Vibe</h3>
      <form onSubmit={handleSubmit}>
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="What's on your mind?" rows={4} className="w-full p-3 border rounded-lg" />
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">{280 - content.length} characters remaining</span>
          <button disabled={isSubmitting} className="px-6 py-2 bg-indigo-600 text-white rounded-lg">{isSubmitting ? 'Posting...' : 'Post Vibe'}</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
