// import modules
import express from "express"
import bodyParser from "body-parser"
// import router from routes
import usersRoutes from "./routes/users.js" 

// init express
const app = express();

// define the backend port
const PORT = 5000

// use body-parser
app.use(bodyParser.json())

// Set the starting path for all the routes in the users file
app.use("/users", usersRoutes)

// create route
app.get("/", (req, res) => res.send("Hello from homepage"))

// listen for incoming requests
app.listen(PORT, () => {
    console.log(`App running on port: http://localhost:${PORT}`)
})