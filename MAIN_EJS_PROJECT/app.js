const express = require('express');
app = express();
const urlRoutes = require('./routes/urlRoutes');
const connectDB = require('./Config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB('mongodb://localhost:27017/urlDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use('/url', urlRoutes);
app.listen(8100, () => {
    console.log('Server is running on port 8100');
});