const express = require("express");
const dotenv = require('dotenv');
const connectDB = require("./config/db")

const app = express();
dotenv.config();
connectDB();

 const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is workin on PORT ${port}`));

