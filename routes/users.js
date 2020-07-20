import express from "express"
import { v4 as uuidv4 } from 'uuid'

// use router from express
const router = express.Router()

// Users
const users = []

// Users routes
// all routes in here will start with "/users"
router.get("/", (req, res) => {
    res.send(users)
})

// add users in db
router.post("/", (req, res) => {
    const user = req.body
    const userWithId = {
        id: uuidv4(),
        ...user
    }

    users.push(userWithId)
    res.send("user "+ user.firstName +" has been added to the database")
})


export default router