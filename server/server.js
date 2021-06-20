const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");

app.get("/", (req, res) => {
  db.query("SELECT * FROM travel_test", (err, data) => {
    if (!err) res.send({ data });
    else res.send(err);
  });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
