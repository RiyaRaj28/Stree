const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

require("./db conn/connection");
const router = require('./routes/userRouters');

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});