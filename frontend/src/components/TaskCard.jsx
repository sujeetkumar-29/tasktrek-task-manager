import React from 'react';
import { CheckCircle, Edit3, Trash2, AlertCircle, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const { theme } = useTheme();
  
  const priorityColors = {
    High: theme === 'dark' 
      ? 'border-l-red-500 bg-red-900/20' 
      : 'border-l-red-500 bg-red-50',
    Medium: theme === 'dark' 
      ? 'border-l-yellow-500 bg-yellow-900/20' 
      : 'border-l-yellow-500 bg-yellow-50',
    Low: theme === 'dark' 
      ? 'border-l-green-500 bg-green-900/20' 
      : 'border-l-green-500 bg-green-50'
  };

  const priorityIcons = {
    High: '🔴',
    Medium: '🟡',
    Low: '🟢'
  };

  return (
    <div className={`p-6 rounded-xl border-l-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
      priorityColors[task.priority]
    } ${theme === 'dark' ? 'shadow-gray-900/20 hover:shadow-gray-900/40' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onToggleComplete(task._id, !task.completed)}
            className={`p-1 rounded-full transition-colors ${
              task.completed ? 'text-green-600' : 'text-gray-400 hover:text-green-600'
            }`}
          >
            <CheckCircle size={20} />
          </button>
          <h3 className={`font-semibold text-lg transition-colors ${
            task.completed 
              ? `line-through ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}` 
              : `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`
          }`}>
            {task.title}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{priorityIcons[task.priority]}</span>
          <button
            onClick={() => onEdit(task)}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'text-blue-400 hover:bg-blue-900/30' 
                : 'text-blue-600 hover:bg-blue-100'
            }`}
          >
            <Edit3 size={16} />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'text-red-400 hover:bg-red-900/30' 
                : 'text-red-600 hover:bg-red-100'
            }`}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      {task.description && (
        <p className={`mb-3 text-sm transition-colors ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {task.description}
        </p>
      )}
      
      <div className={`flex items-center justify-between text-sm transition-colors ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
      }`}>
        <span className="flex items-center space-x-1">
          <AlertCircle size={14} />
          <span>{task.priority} Priority</span>
        </span>
        {task.dueDate && (
          <span className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;