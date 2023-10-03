const db = require('../database.db');

// Play with removing the returning on line 17 once everything is working
const insert_book = db.prepare(/*sql*/ `
    INSERT INTO books (
            user_id,
            title,
            author,
            review,
            rating)
        VALUES (
            $user_id,
            $title,
            $author,
            $review,
            $rating )
        RETURNING title, author, review, rating, rating
`);

function createBook(title, author, review, rating, user_id) {
  return insert_book.get({ title, author, review, rating, user_id });
}

// Need to do list books function after lunch

module.exports = { createBook };
