const studentroutes = require("routes/student");
const bookroutes = require("routes/book");

//express import
const express = require("express");
const app = express();
//monggose import
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
//bodyparser import
const bodyparser = require("body-parser");
const student = require("./src/controllers/student");
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send(`welcome to library`);
});

const server = app.listen(8081, () => {
  const { address, port } = server.address();
  console.log(`exemple app listening at http://${address}:${port}`);
});
studentroutes(app);
bookroutes(app);
