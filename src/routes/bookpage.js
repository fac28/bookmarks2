const express = require('express');
//Variables
const router = express.Router();

// const templates = require("../templates");

router.get('/:user_id', (req, res) => {
  // Get the user ID from the URL parameters
  const userId = req.params.user_id;
  res.send(`<h1>Welcome to your bookshelf, User ID: ${userId}</h1>`);
});

module.exports = router;
