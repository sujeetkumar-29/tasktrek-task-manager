import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const TaskModal = ({ isOpen, onClose, onSubmit, task, loading }) => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'Low',
        dueDate: '',
        completed: false
    });

    useEffect(() => {
        if (task) {
            setFormData({
                title: task.title || '',
                description: task.description || '',
                priority: task.priority || 'Low',
                dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
                completed: task.completed || false
            });
        } else {
            setFormData({
                title: '',
                description: '',
                priority: 'Low',
                dueDate: '',
                completed: false
            });
        }
    }, [task]);

    const handleSubmit = () => {
        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className={`rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto transition-colors ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
                <h2 className={`text-2xl font-bold mb-6 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                    {task ? 'Edit Task' : 'Create New Task'}
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                            Title
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                                theme === 'dark' 
                                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                    : 'bg-white border-gray-300 text-gray-900'
                            }`}
                            required
                        />
                    </div>

                    <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                            Description
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none transition-colors ${
                                theme === 'dark' 
                                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                    : 'bg-white border-gray-300 text-gray-900'
                            }`}
                        />
                    </div>

                    <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                            Priority
                        </label>
                        <select
                            value={formData.priority}
                            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                                theme === 'dark' 
                                    ? 'bg-gray-700 border-gray-600 text-white' 
                                    : 'bg-white border-gray-300 text-gray-900'
                            }`}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                            Due Date
                        </label>
                        <input
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                                theme === 'dark' 
                                    ? 'bg-gray-700 border-gray-600 text-white' 
                                    : 'bg-white border-gray-300 text-gray-900'
                            }`}
                        />
                    </div>

                    {task && (
                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                id="completed"
                                checked={formData.completed}
                                onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
                                className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                            />
                            <label htmlFor="completed" className={`text-sm font-medium transition-colors ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                Mark as completed
                            </label>
                        </div>
                    )}

                    <div className="flex space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className={`flex-1 py-3 border rounded-xl font-semibold transition-colors ${
                                theme === 'dark' 
                                    ? 'border-gray-600 text-gray-200 hover:bg-gray-700' 
                                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : (task ? 'Update' : 'Create')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;