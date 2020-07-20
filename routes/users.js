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

    // Push user with id
    users.push({
        id: uuidv4(),
        ...user
    })

    // send a response to the page
    res.send("user "+ user.firstName +" has been added to the database")
})

// Get user with id - /users/userId
router.get("/:id", (req, res) => {
    const {id} = req.params

    const fountUser = users.find((user) => user.id === id)

    res.send("The user is: "+fountUser.firstName)
})



export default router