import React, { useState, useEffect } from 'react';
import api from '../context/AppContext'; 
import AuthForm from './AuthForm'; 
import Dashboard from './Dashboard'; 
import ThemeToggle from './ThemeToggle';




// Main App Component
const TaskManagerApp = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('tasktrek_token');
    if (savedToken) {
      setToken(savedToken);
      fetchUser(savedToken);
    }
  }, []);

  const fetchUser = async (token) => {
    const result = await api.getUser(token);
    if (result.success) {
      setUser(result);
    } else {
      localStorage.removeItem('tasktrek_token');
      setToken(null);
    }
  };

  const handleAuth = async (formData) => {
    setLoading(true);
    setMessage('');

    const result = isLogin 
      ? await api.login({ email: formData.email, password: formData.password })
      : await api.register(formData);

    if (result.success) {
      setToken(result.token);
      localStorage.setItem('tasktrek_token', result.token);
      await fetchUser(result.token);
    } else {
      setMessage(result.message);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('tasktrek_token');
    setToken(null);
    setUser(null);
  };

  if (token && user) {
    return <Dashboard user={user} token={token} onLogout={handleLogout} />;
  }

  return (
    <div>
      <ThemeToggle />
      <AuthForm 
        isLogin={isLogin} 
        onSubmit={handleAuth} 
        loading={loading} 
      />
      
      {message && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )}
      
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-white/70 hover:text-white transition-colors"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default TaskManagerApp;