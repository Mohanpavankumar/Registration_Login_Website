const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db.js');
const router = require('./routes');

const app = express();

// Middleware
app.use(cors({
    origin: [process.env.FRONTEND_URL, 'https://mern-authenticationsystem.netlify.app'],
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

// API Routes
app.use("/api", router);

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the Authentication API!');
});

const PORT = process.env.PORT || 8000;

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Database Connected");
        console.log("Server is running on port", PORT);
    });
}).catch(err => {
    console.error("Failed to connect to DB", err);
});
