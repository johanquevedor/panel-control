import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const login = (username) => {
    setIsLoggedIn(true);
    setUserName(username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;
