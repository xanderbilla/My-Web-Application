const dotenv = require('dotenv')
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser())

dotenv.config({ path: './config.env' })
require('./db/conn')

app.use(express.json());

//Link the router file to make router files
app.use(require('./router/auth'))
const PORT = process.env.PORT;

// app.get('/support', (req, res) => {
//     res.send("This is about");
// })

app.get('/about', (req, res) => {
    res.send("This is about");
})

app.get('/contact', (req, res) => {
    res.send("This is contact");
})


app.get('/signin', (req, res) => {
    res.send("This is login");
})

app.get('/register', (req, res) => {
    res.send("This is register");
})

app.listen(PORT, () => {
    console.log("Server is running...on port 3000");
})