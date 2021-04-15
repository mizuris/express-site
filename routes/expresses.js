const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("expresses");
});

router.get("/expresses", (req, res) => {
  const { model } = req.query;
  res.json({ model });
});

module.exports = router;
