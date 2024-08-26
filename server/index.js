const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const db = require('./db conn/connection'); // assuming your database connection code is in db.js

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

//import routers
const incidentRouter = require('./routes/incidentRouters');
const userRouter = require('./routes/userRouters');
const authRouter = require('./routes/authRouters');

//use Routers
app.use('/api/incidents', incidentRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.post('/hello', (req, res) => {
    res.send('Hello, POST request!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});