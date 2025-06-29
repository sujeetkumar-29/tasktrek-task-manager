import express from 'express'
import { getUser, loginUser, registerUser } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'

const userRouter=express.Router()

// Public links
userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

// private links
userRouter.get("/me",authUser,getUser)

export default userRouter

