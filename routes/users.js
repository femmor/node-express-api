import express from "express"

// use router from express
const router = express.Router()

// Users
const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 32
    }
]

// Users routes
// all routes in here will start with "/users"
router.get("/", (req, res) => {
    res.send(users)
})

// add users in db
router.post("/", (req, res) => {
    const user = req.body
    users.push(user)
    res.send("user "+ user.firstName +" has been added to the database")
})


export default router