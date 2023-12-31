PRAGMA foreign_keys = ON;

BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  hash TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Should the primary key be called just id or eg. book_id - is there a reason why?

CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  title TEXT,
  author TEXT,
  review TEXT,
  rating INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

COMMIT;