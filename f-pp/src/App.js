import React, { useState, useEffect } from 'react';
import './App.css'
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/context/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <AppRouter></AppRouter>
    </AuthContext.Provider>
  );
}

export default App;


