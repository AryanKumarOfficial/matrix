require("dotenv").config();
const express = require('express');
const connectDB = require('./database/middleware/Mongoose');
const cors = require("cors");

const app = express();

// Middleware to parse JSON requests and handle CORS
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
    // Send an HTML response
    res.send("<span style='display: flex;justify-content: center;align-items: center;height: 100vh; text-transform: uppercase; font-size: 4rem; font-weight: 900;background: linear-gradient(90deg,#f5f5f5,darkorange,orangered,#f9f9f9);background-clip: text;color: transparent;'>Backend is running</span>");
});

app.use('/api/contact/', require('./routes/contact'));

// Function to start the server
const startServer = async () => {
    try {
        // Connect to the database
        await connectDB();
        // Start the server
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server', error);
        process.exit(1); // Exit process with failure
    }
};

// Start the server
startServer();