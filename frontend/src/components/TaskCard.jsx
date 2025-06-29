import React from 'react';
import { CheckCircle, Edit3, Trash2, AlertCircle, Calendar } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const priorityColors = {
    High: 'border-l-red-500 bg-red-50',
    Medium: 'border-l-yellow-500 bg-yellow-50',
    Low: 'border-l-green-500 bg-green-50'
  };

  const priorityIcons = {
    High: '🔴',
    Medium: '🟡',
    Low: '🟢'
  };

  return (
    <div className={`p-6 rounded-xl border-l-4 ${priorityColors[task.priority]} shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
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
          <h3 className={`font-semibold text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {task.title}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{priorityIcons[task.priority]}</span>
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Edit3 size={16} />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      {task.description && (
        <p className="text-gray-600 mb-3 text-sm">{task.description}</p>
      )}
      
      <div className="flex items-center justify-between text-sm text-gray-500">
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