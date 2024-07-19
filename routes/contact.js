const express = require('express');
const Contact = require("../database/Models/Contact")
const router = express.Router();

router.get('/all', async (req, res) => {
    try {
        const contacts = await Contact.find({});
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({
                success: false, data: null, message: "No data found!"
            });
        }
        res.status(200).json({
            success: true, data: contacts, message: "Data Found!"
        });
    } catch (e) {
        res.status(500).json({
            success: false, data: null, message: `Internal Server Error ${e}`
        });
    }
});

router.get('/top', async (req, res) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : 5;
        const contacts = await Contact.find().sort({createdAt: -1}).limit(limit);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({
                success: false, data: null, message: "No data found!"
            });
        }
        res.status(200).json({
            success: true, data: contacts, message: "Data Found!"
        });
    } catch (e) {
        res.status(500).json({
            success: false, data: null, message: `Internal Server Error ${e}`
        });
    }
})

router.post("/add", async (req, res) => {
    try {
        const {name, email, message} = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false, message: "Incomplete data"
            });
        }
        const newContact = await Contact.create({
            name, email, message
        });
        res.status(201).json({
            success: true, message: "Message sent successfully", newContact
        });
    } catch (e) {
        res.status(500).json({
            success: false, message: `Internal Server Error ${e}`
        });
        console.log("Error: " + e);
    }
});


module.exports = router;
