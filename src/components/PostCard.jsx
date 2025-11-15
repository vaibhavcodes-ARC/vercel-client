import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, onDelete, userId }) => {
  const isAuthor = post.author?._id === userId;
  return (
    <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 mb-4">
      <div className="flex justify-between items-start">
        <Link to={`/profile/${post.author?.username}`} className="text-lg font-bold text-indigo-600 hover:underline">@{post.author?.username}</Link>
        {isAuthor && (
          <button onClick={() => onDelete(post._id)} className="text-red-500 hover:text-red-700">&times; Delete</button>
        )}
      </div>
      <p className="mt-3 text-gray-800 whitespace-pre-wrap">{post.content}</p>
      <p className="text-xs text-gray-500 mt-3 border-t pt-2">Posted on: {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default PostCard;
