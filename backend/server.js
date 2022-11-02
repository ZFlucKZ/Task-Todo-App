const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const Task = require('./models/taskSchema');
const taskRoute = require('./routes/taskRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(taskRoute);

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
