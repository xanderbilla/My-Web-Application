const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/userSchema');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('../db/conn');
const authenticate = require("../middleware/authenticate")

router.get('/', (req, res) => {
    res.send("Hello from Router")
});

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Some values is/are missing" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });

        await user.save();

        res.status(201).json({ message: "User registered Successfully" });

    } catch (err) {
        console.log(err);
    }
})

//login route

router.post('/signin', async (req, res) => {

    /*
    console.log(req.body);
    res.json({message: "Awesome"})
    */
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "User registered Successfully" });
            return;
        }

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwt_token", token, {
                expires: new Date(Date.now() + 480000),
                httpOnly: true
            })


            if (!isMatch) {
                res.status(400).json({ message: "Invalid Credentials" });
                return;
            }
            else {
                res.json({ message: "User signed In Successfully" });
            }
            // return;
        }
        else {
            res.status(400).json({ message: "Invalid Credentials" });
        }
    } catch (err) {
        console.log(err);
    }
})

//ABOUT US

router.get('/support', authenticate, (req, res) => {
    console.log("Hello This is about us on server");
    res.send(req.rootUser);
});

// Contact Auto Fill and homepage
router.get('/getdata', authenticate, (req, res) => {
    console.log("Hello This is contact auto fill on server");
    res.send(req.rootUser);
});

//Logout

router.get('/logout', (req, res) => {
    console.log("Hello This is logout on server");
    res.clearCookie('jwt_token', {path: '/'})
    res.status(200).send("User logout");
});

module.exports = router;