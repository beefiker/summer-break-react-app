const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'Content-Type' : 'multipart/form-data' ,* "
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});
app.use(cors());

app.get("/", cors(), (req, res) => {
  res.send("hello route / ");
});

app.get("/api/test", cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.query("SELECT * FROM travel_test", (err, data) => {
    if (!err) res.send({ data });
    else res.send(err);
  });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
