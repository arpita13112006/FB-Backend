const express = require('express');
app = express();
const urlRoutes = require('./routes/urlRoutes');
const connectDB = require('./Config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
connectDB('mongodb://localhost:27017/urlDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
    app.get('/', (req, res) => {
        res.render('index');
    });
app.use('/url', urlRoutes);
app.listen(8100, () => {
    console.log('Server is running on port 8100');
});