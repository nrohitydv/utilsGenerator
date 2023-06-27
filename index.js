const express = require("express");
const morgan = require('morgan')

const app = express();

app.use(morgan('combined'))
const indexRouter = require("./routes");



app.listen(8000, () => {
  console.log("server running on port 8000");
});
