const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Importing routers and middleware
const user = require('./routes/userRoutes');
const middleware = require('./middleware/jsonwebtoken');

// Initialize express app
const app = express();

// Use CORS middleware
app.use(cors());

// Use bodyParser middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Define parent routers
app.use('/user', user);
app.use(middleware);


// MongoDB connection
const dbURI = 'mongodb+srv://WE:8877446687@we.r6e7kuz.mongodb.net/?appName=WE'; // MongoDB remote

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Server');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.get("/hello", (req, res) => {
    res.send("Hello World");

})

// Start the server
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
