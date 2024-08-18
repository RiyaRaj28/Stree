const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rrajj7674:7vUqPPdIS11qTgYS@streecluster.ydkvg.mongodb.net/').then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Failed to connect to the database', err);
})