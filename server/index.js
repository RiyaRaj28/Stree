const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('./db conn/connection'); 
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'https://stree-frontend.onrender.com',
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Import routers
const incidentRouter = require('./routes/incidentRouters');
const userRouter = require('./routes/userRouters');
const authRouter = require('./routes/authRouters');
const errorMiddleware = require('./middlewares/errorMiddleware');
const contactRouters = require('./routes/contactRouters');
const adminRouter = require('./routes/adminRouters');

// Use Routers
app.use('/api/incidents', incidentRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouters);
app.use('/api/admin', adminRouter);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});