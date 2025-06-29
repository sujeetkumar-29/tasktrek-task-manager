// API Configuration
const API_BASE_URL = 'http://localhost:4000/api';
// API Functions
const api = {
  // Auth APIs
  register: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Network error' };
    }
  },
  
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Network error' };
    }
  },
  
  getUser: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/me`, {
        headers: { token }
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Network error' };
    }
  },
  
  // Task APIs
  getTasks: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/task`, {
        headers: { token }
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Network error' };
    }
  },
  
  createTask: async (token, taskData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/create-task`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          token 
        },
        body: JSON.stringify(taskData)
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Network error' };
    }
  },
  
  updateTask: async (token, taskId, taskData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          token 
        },
        body: JSON.stringify(taskData)
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Network error' };
    }
  },
  
  deleteTask: async (token, taskId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: { token }
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Network error' };
    }
  }
};

export default api;