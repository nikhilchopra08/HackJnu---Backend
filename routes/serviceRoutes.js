const express = require("express");
const router = express.Router();
const {
    getService, addService,
} = require("../controller/service");

// Route to register a new user
router.get("/", getService);

// Route to login a user
router.post("/", addService);

module.exports = router;