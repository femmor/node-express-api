import express from "express"
import { createUser, getUser, getUserWithId, deleteUser, updateUser } from "../controllers/users.js"

// use router from express
const router = express.Router()

// Users routes
// all routes in here will start with "/users"
router.get("/", getUser)

// add users in db
router.post("/", createUser)

// Get user with id - /users/userId
router.get("/:id", getUserWithId)

// Delete user with id - /users/userId
router.delete("/:id", deleteUser)

// Edit/Patch/Update user with id - /users/userId
router.patch("/:id", updateUser)

export default router