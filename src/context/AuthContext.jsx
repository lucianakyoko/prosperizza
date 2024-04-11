'use client';
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isChecking, setIsChecking] = useState(false);

  const login = async (email, password) => {
    setIsChecking(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(response.ok) {
        const data = await response.json();
        setUser(data.user);
        setIsAuthenticated(true);
        setLoginErrorMessage(null);
   
      } else {
        setLoginErrorMessage('E-mail ou senha inválido.');
        setIsAuthenticated(false);
      }
    } catch (error) {
      setLoginErrorMessage('Erro ao fazer login.');
      setIsAuthenticated(false);
    } finally {
      setIsChecking(false)
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false)
  };

  const values = {
    user,
    loginErrorMessage,
    setLoginErrorMessage,
    isAuthenticated,
    login,
    logout,
    isChecking
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}