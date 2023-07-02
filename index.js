const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// mongodb Connection
mongoose
  .connect("mongodb://localhost:27017/utilsGenerator")
  .then(() => console.log("Database Connected!"));

const app = express();

const indexRouter = require("./routes");

// Setting up the third party middlewares
app.use(morgan("short"));
app.use(cors());
// JSON Data capture
app.use(bodyParser.json());
// Form data capture
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up the EJS Templating
app.set("view engine", "ejs");
app.set("views", "./views");

// Serving the static files
app.use(express.static("public"));

// Trying to test the application level error handler
app.get("/broken", (req, res, next) => {
  throw new Error("Broken");
});

app.use("/", indexRouter);

// Application Level Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
