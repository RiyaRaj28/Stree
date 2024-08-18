const express = require('express');

const app = express();
const port = 3000;

require("./db conn/connection");
const router = require('./routes/userRouters');

app.use(router);
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});