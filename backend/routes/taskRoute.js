import express from "express";
import authUser from "../middlewares/authUser.js";

import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

// GET all tasks
taskRouter.get("/task", authUser, getTasks);

// POST a new task
taskRouter.post("/create-task", authUser, createTask);

// GET task by ID
taskRouter.get("/:id", authUser, getTaskById);

// PUT (update) task by ID
taskRouter.put("/:id", authUser, updateTask);

// DELETE task by ID
taskRouter.delete("/:id", authUser, deleteTask);

export default taskRouter;
