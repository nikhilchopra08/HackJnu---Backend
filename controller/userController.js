const asyncHandler = require("express-async-handler");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const bcrypt = require('bcrypt');
const dotenv = require("dotenv").config();
const CryptoJS = require('crypto-js');

router.post("/register", async (req, res) => {
    try {
        const { name, email, password, account } = req.body;

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            account
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Failed to register user" });
    }
});

router.post("/login", asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Email or password is not valid" });
        }

        // Compare the hashed password using bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Email or password is not valid" });
        }
const id = user._id;
const phone = user.number;
const accountType = user.account;
        const accesstoken = jwt.sign({
            id: user._id,
        }, process.env.JWT_SEC , 
        {expiresIn: "3d"}
        );


console.log(id);
        console.log(accesstoken);
        console.log(accountType);
        console.log(phone);

        res.status(200).json({ accesstoken , id , accountType , phone});
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Failed to login user" });
    }
}));

module.exports = router;
