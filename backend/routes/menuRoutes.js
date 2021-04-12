const express = require("express");
const Menu = require("../models/menuModel.js");
const mongoose = require("mongoose");
const menu = require("./menu.json");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json({ menu });
});

module.exports = router;
