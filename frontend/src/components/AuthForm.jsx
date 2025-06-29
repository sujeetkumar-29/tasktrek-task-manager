import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';

const AuthForm = ({ isLogin, onSubmit, loading, onToggleMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Multi-layered Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-pink-400 to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-500/40 to-indigo-800/60"></div>
      </div>

      {/* Floating Animated Elements
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-300/15 rounded-full blur-2xl animate-ping delay-700"></div>
      </div> */}

      {/* Main Form Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/[0.18] transition-all duration-500 group">
          {/* Header with Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
              {isLogin ? 'Welcome Back' : 'Join Tasktrek'}
            </h1>
            <p className="text-white/80 text-sm font-medium">
              {isLogin 
                ? 'Continue your productivity journey' 
                : 'Start organizing your life beautifully'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <User className="h-5 w-5 text-white/70 group-focus-within:text-white transition-colors duration-200" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </div>
            )}
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Mail className="h-5 w-5 text-white/70 group-focus-within:text-white transition-colors duration-200" />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                required
              />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Lock className="h-5 w-5 text-white/70 group-focus-within:text-white transition-colors duration-200" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center z-10 text-white/70 hover:text-white transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none backdrop-blur-sm"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Loading...
                </div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            {/* <p className="text-white/70 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={onToggleMode}
                className="ml-2 text-white font-semibold hover:text-orange-300 transition-colors duration-200 underline decoration-2 underline-offset-2"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p> */}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-6 text-center">
          <p className="text-white/60 text-xs">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;