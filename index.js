require("dotenv").config();
const express = require('express');
const connectDB = require('./database/middleware/Mongoose');
const cors = require("cors")
const app = express();
const startServer = async () => {
    try {
        await connectDB();
        // Middleware to parse JSON requests
        app.use(cors())
        app.use(express.json());
        // Routes

        app.get("/", async (req, res) => {
            //     send a html response
            res.send("<span style='display: flex;justify-content: center;align-items: center;height: 100vh; text-transform: uppercase; font-size: 4rem; font-weight: 900;background: linear-gradient(90deg,#f5f5f5,darkorange,orangered,#f9f9f9);background-clip: text;color: transparent;'>Backend is running</span>");
        })

        app.use('/api/contact/', require('./routes/contact'));

        // Start the server
        app.listen(5000, 'localhost', () => {
            console.log('Server is running on http://localhost:5000');
        });
    } catch (error) {
        console.error('Failed to start server', error);
        process.exit(1); // Exit process with failure
    }
};

startServer();
