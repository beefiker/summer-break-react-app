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

app.get("/api/all", cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.query("SELECT * FROM travel_city order by rating desc", (err, data) => {
    if (!err) res.send({ data });
    else res.send(err);
  });
});

app.get("/api/city/:id", cors(), (req, res) => {
  db.query(
    "SELECT * FROM travel_city tc, travel_taglist tl where tc.tag_id = tl.tag_id and tl.tag_name like '%" +
      req.params.id +
      "%' order by tc.rating desc",
    (err, data) => {
      if (!err) res.send({ data });
      else res.send(err);
    }
  );
});

app.get("/api/search/:id", cors(), (req, res) => {
  db.query(
    "SELECT * FROM travel_city tc, travel_taglist tl where (tc.tag_id = tl.tag_id) and (tl.tag_name like '%" +
      req.params.id +
      "%' OR tc.cityname like '%" +
      req.params.id +
      "%'); ",
    (err, data) => {
      if (!err) res.send({ data });
      else res.send(err);
    }
  );
});

app.get("/api/tags", cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.query("SELECT tag_name FROM travel_taglist", (err, data) => {
    if (!err) res.send({ data });
    else res.send(err);
  });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
