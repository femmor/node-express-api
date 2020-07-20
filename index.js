// import modules
import express from "express"
import bodyParser from "body-parser"

// init express
const app = express();

// define the backend port
const PORT = 5000

// use body-parser
app.use(bodyParser.json())

// listen for incoming requests
app.listen(PORT, () => {
    console.log(`App running on port: http://localhost:${PORT}`)
})