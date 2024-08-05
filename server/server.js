/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
// require('dotenv').config({ path: './mongodb.env' });
// const authRoutes = require('./routes/authRoutes');
// const sessionRoutes = require('./routes/sessionRoutes');

const app = express();
//runs on a the port provided by hosting service. If not provided, runs on 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("server running on port "+PORT))

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).json("Hello from the backend!")
})

// //MongoDB connection
// const mongoURI = process.env.MONGO_URI;
const TEMP_URL = "mongodb+srv://dylankinsella7:zvDozndWFa1QKaZ4@cluster0.synwgk7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(TEMP_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// // Routes
// app.use('/auth', authRoutes); // Auth routes
// app.use('/session', sessionRoutes); // Session routes

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
const defaultErr = {
  log: 'Express error handler caught unknown middleware error',
  status: 500,
  message: { err: 'An error occurred' }
};


// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});