//require the packages needed for this app
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
//initiate the port locally and in mongodb
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";
//initiate the application to build through express
const app = express();
//use all require packages
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//initiate connection into mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));
//function to call the port to listen whenever it was called
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});