const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//connecting to MongoDB Atlas
const config = require("./config");

//setting the port number
const port = 3001;

//to enable cross origin resource sharing
app.use(cors());

//used to parse the response data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("."));
//listen to port
app.listen(port, () => {
  console.log("Running on " + port);
});

mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("NewsDB connected succesfully");
  })
  .catch((err) => console.log("DB connection failed"));

const httpRouter = require("./routes/route");
app.use("/", httpRouter);
module.exports = app;
