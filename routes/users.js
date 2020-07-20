import express from "express"
import { v4 as uuidv4 } from 'uuid'

// use router from express
const router = express.Router()

// Users
let users = []

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

// Delete user with id - /users/userId
router.delete("/:id", (req, res) => {
    const {id} = req.params

    users = users.filter(user => user.id !== id)

    res.send("The user with id "+ id +" was deleted")
})

// Edit/Patch/Update user with id - /users/userId
router.patch("/:id", (req, res) => {
    const {id} = req.params
    const { firstName, lastName, age } = req.body
    const userToUpdate = users.find(user => user.id === id)

    if(firstName) userToUpdate.firstName = firstName
    if(lastName) userToUpdate.lastName = lastName
    if(age) userToUpdate.age = age

    res.send("user with id "+id+" updated!")
})

export default router