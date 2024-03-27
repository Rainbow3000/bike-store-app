require("dotenv").config();
const express = require("express");
const connect = require("./db/connect");
const app = express();
app.use(express.json());
connect();

const {authRouter,productRouter,categoryRouter,orderRouter} = require('../backend/routers')

app.use(authRouter,productRouter,categoryRouter,orderRouter)

app.listen(process.env.PORT || 7000, () =>
  console.log(`server is running at http://localhost:${process.env.PORT}`)
);
