const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const { isNumber } = require("util");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

//http://www.name.co.il/
app.get("/", (req, res) => {
  // res.json({ msg: "welcome to get" });
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
app.post("/", (req, res) => {
  res.json(req.body);
});
app.get("/api/:userid/a1/a2/:aaa", (req, res) => {
  res.json(req.params);
});
app.get("/daf", (req, res) => {
  res.json(req.query);
});
app.post("/api/isnumber", (req, res) => {
  let num = parseFloat(req.body.email);
  console.log(num);
  if (isNaN(num)) res.json({ err: "not a number" });
  else {
    num += 5;
    res.json({ number: num });
  }
});
// //http://www.name.co.il/login
// app.get("/login", (req, res) => {});
// //http://www.name.co.il/login/admin
// app.get("/login/admin", (req, res) => {});

app.listen(PORT, () => {
  console.log("wer life on " + PORT);
});
