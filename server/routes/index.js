const express = require("express");

const rootRouter = express.Router();
const authRouter = require("./authRouters");
rootRouter.use("/auth", authRouter);


module.exports = rootRouter;
