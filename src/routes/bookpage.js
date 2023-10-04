const express = require('express');
const router = express.Router();

const { getSession } = require('../model/session.js');
const { getBooks, createBook } = require('../model/bookpage.js');
const { displayYourBooks } = require('../templates.js');

// const templates = require("../templates");

router.get('/:user_id', (req, res) => {
  // Get the user ID from the URL parameters
  const sid = req.signedCookies.sid;
  const session = getSession(sid);

  const current_user = session && session.user_id;
  const bookshelf_owner = Number(req.params.user_id);
  console.log('current user:', current_user);
  console.log('bookshelf owner:', bookshelf_owner);

  if (current_user !== bookshelf_owner) {
    return res.status(401).send("<h1>You aren't allowed to see that</h1>");
  }
  // To do
  // - create a function to display all your books
  const books = getBooks(current_user);
  res.send(displayYourBooks(books));
});


router.post('/:user_id', (req, res) => {
  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  const current_user = session && session.user_id;
  const content = req.body
  console.log("content:", content)
  console.log("curr user:", current_user)
  
  if (!content|| !current_user) {
    return res.status(401).send("<h1>Review submission failed</h1>");
  }
  createBook({
    user_id: current_user,
    title: content.title,
    author: content.author,
    review: content.review,
    rating: content.rating
  });
  res.redirect(`/my-shelf/${current_user}`);


})
module.exports = router;
