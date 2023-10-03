const DIR = "src";

// const server = require(`../${DIR}/server.js`);
const db = require(`../${DIR}/database/db.js`);

function reset() {
  db.exec(/*sql*/ `
      DELETE FROM books;
      DELETE FROM sessions;
      DELETE FROM users;
      DELETE FROM sqlite_sequence WHERE name IN ('books', 'sessions', 'users');
    `);
}

module.exports = {
  reset,
};
