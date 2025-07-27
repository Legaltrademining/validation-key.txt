const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Add this route for root path
app.get("/", (req, res) => {
  res.send("✅ Legal Trade Mining Backend is up and running!");
});

// Existing login verification route
app.post("/verify-login", (req, res) => {
  const { accessToken, user } = req.body;
  console.log("Verified user:", user.username);
  res.send({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
