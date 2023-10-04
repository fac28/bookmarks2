const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const templates = require('../templates.js');

router.get("/", (req, res) => {
    res.send(templates.logIn())
})

module.exports = router

