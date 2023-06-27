const express = require("express");
const morgan = require('morgan');
const ejs=require("ejs");
const cors=require("cors");

const app = express();

app.use(morgan('short'))
app.use(cors());

app.set("view engine","ejs");
app.set("views","./views");

const indexRouter = require("./routes");

app.use("/",indexRouter)

app.listen(8000, () => {
  console.log("server running on port 8000");
});
