const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/verify-login", (req, res) => {
  const { accessToken, user } = req.body;
  console.log("Login verified for:", user.username);
  res.send({ success: true });
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
