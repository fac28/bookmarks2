const db = require("../database/db.js");

// Play with removing the returning on line 17 once everything is working
const insert_book = db.prepare(/*sql*/ `
    INSERT INTO books (
            user_id,
            title,
            author,
            review,
            rating )
        VALUES (
            $user_id,
            $title,
            $author,
            $review,
            $rating )
        RETURNING id, title, author, review, rating, created_at
`);

// If there's a bug - check see if created_at is the problem
function createBook({ user_id, title, author, review, rating }) {
  return insert_book.get({ user_id, title, author, review, rating });
}

const select_books = db.prepare(/* sql */ `
    SELECT title, author, review, rating, created_at FROM books WHERE user_id = ?
`);

function getBooks(user_id) {
  return select_books.all(user_id);
}

module.exports = { createBook, getBooks };
