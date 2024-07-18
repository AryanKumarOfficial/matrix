const mongoose = require("mongoose");

const connectDB = async () => {

    if (mongoose.connection.readyState === 1) {
        console.log("Database already connected")
        return;
    }
    try {
        console.log("connecting to mongo DB")
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
            socketTimeoutMS: 45000,
        })
        console.log("Connected to DB")
    } catch (e) {
        console.log("Error connecting DB ", e)
        throw e;
    }
}

module.exports = connectDB;