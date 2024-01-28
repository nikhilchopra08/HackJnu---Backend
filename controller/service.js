const asyncHandler = require("express-async-handler");
const Service = require("../model/services");

//@desc Get all Services
//@route GET /api/services
//@access public
const getService = asyncHandler(async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({ services });
    } catch (error) {
        console.error("Error fetching Services:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//@desc Create new Service
//@route POST /api/services
//@access public
const addService = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const { name, Image, desc, duration } = req.body; // Updated field names to match Service model
    if (!name || !Image || !desc || !duration) {
        res.status(400);
        throw new Error("All fields mandatory!");
    }

    try {
        const service = await Service.create({
            name,
            Image,
            desc,
            duration
        });
        res.status(201).json(service);
    } catch (error) {
        console.error("Error adding Service:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = {
    getService,
    addService
};
