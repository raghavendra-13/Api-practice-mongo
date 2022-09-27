const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Alien";

const app = express();

mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected...");
});

app.use(express.json())


const alienRouter = require('../gty/routers/aliens');
app.use('/aliens',alienRouter);



app.listen(9000, () => {
  console.log("Server started....");
});
