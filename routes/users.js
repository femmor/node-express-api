import express from "express"

// use router from express
const router = express.Router()

// Users routes
// all routes in here will start with "/users"
router.get("/", (req, res) => {
    res.send("Hello from users")
})

export default router