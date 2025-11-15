import React, { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useAuth } from '../context/AuthContext';
import { getPosts, deletePost } from '../api';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { token, user } = useAuth();

  const fetchPosts = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await getPosts(token);
      setPosts(data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to load posts');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(postId, token);
        fetchPosts();
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to delete post');
      }
    }
  };

  useEffect(() => {
    if (token) fetchPosts();
  }, [token]);

  if (isLoading) return <div className="text-center mt-20">Loading Vibes...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PostForm onPostCreated={fetchPosts} />
      <h2 className="text-2xl font-bold mb-6">Public Feed ({posts.length} Vibes)</h2>
      <div className="space-y-4">
        {posts.length > 0 ? posts.map(p => (
          <PostCard key={p._id} post={p} onDelete={handleDelete} userId={user?._id} />
        )) : (
          <p className="text-center text-gray-500 p-6 bg-white rounded-xl">No vibes yet! Be the first to post.</p>
        )}
      </div>
    </div>
  );
};

export default FeedPage;
