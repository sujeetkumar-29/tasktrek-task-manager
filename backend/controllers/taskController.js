import Task from "../models/taskModel.js";

// Create New Task
const createTask = async (req, res) => {
    try {
        const { title, description, priority, dueDate, completed } = req.body;
        const task = new Task({
            title,
            description,
            priority,
            dueDate,
            completed: completed === "Yes" || completed === true,
            owner: req.user._id
        });
        const saved = await task.save();
        res.json({ success: true, task: saved });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get all tasks for logged-in user
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ owner: req.user._id }).sort({ createdAt: -1 });
        res.json({ success: true, tasks });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get single task by ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
        if (!task) {
            return res.json({ success: false, message: "Task not found" });
        }
        res.json({ success: true, task });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Update task
const updateTask = async (req, res) => {
    try {
        const data = { ...req.body };
        if (data.completed !== undefined) {
            data.completed = data.completed === "Yes" || data.completed === true;
        }
        const updated = await Task.findOneAndUpdate(
            { _id: req.params.id, owner: req.user._id },
            data,
            { new: true, runValidators: true }
        );
        if (!updated) {
            return res.json({ success: false, message: "Task not found" });
        }
        res.json({ success: true, task: updated });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Delete task
const deleteTask = async (req, res) => {
    try {
        const deleted = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
        if (!deleted) {
            return res.json({ success: false, message: "Task not found" });
        }
        res.json({ success: true, message: "Task deleted" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export { createTask, getTasks, getTaskById, updateTask, deleteTask };
