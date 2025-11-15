import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('vibelinkToken') || null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      const storedUser = localStorage.getItem('vibelinkUser');
      if (storedUser) setUser(JSON.parse(storedUser));
      else {
        // clear token if user not present
        setToken(null);
        localStorage.removeItem('vibelinkToken');
      }
    }
    setIsLoading(false);
  }, [token]);

  const handleLogin = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem('vibelinkToken', jwtToken);
    localStorage.setItem('vibelinkUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('vibelinkToken');
    localStorage.removeItem('vibelinkUser');
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user && !!token,
    isLoading,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
