import axios from 'axios';

// Use the correct env variable
const API_BASE_URL = import.meta.env.VITE_API_URL;

const authRequest = async (method, url, token, data = null) => {
  const config = {
    method,
    url: `${API_BASE_URL}${url}`,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    data,
  };
  const res = await axios(config);
  return res.data;
};

export const login = (email, password) => 
  axios.post(`${API_BASE_URL}/api/auth/login`, { email, password })
       .then(r => r.data);

export const register = (username, email, password) => 
  axios.post(`${API_BASE_URL}/api/auth/register`, { username, email, password })
       .then(r => r.data);

export const getPosts = (token) => authRequest('get', '/api/posts', token);
export const createPost = (content, token) => authRequest('post', '/api/posts', token, { content });
export const deletePost = (postId, token) => authRequest('delete', `/api/posts/${postId}`, token);

export default {
  login,
  register,
  getPosts,
  createPost,
  deletePost,
};
