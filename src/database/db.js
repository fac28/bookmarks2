const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const Database = require("better-sqlite3");

/**
 * Create a new DB file, or use an existing one.
 * If no env var is set will use a temp in-memory DB.
 */
const db = new Database(process.env.DB_FILE);

/**
 * Make sure DB has the right structure by running schema.sql
 * This is responsible for creating the tables and columns we need
 * It should be safe to run every time (e.g. using `CREATE IF NOT EXISTS`)
 */
const schemaPath = join("src", "database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

module.exports = db;
