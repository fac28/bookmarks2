const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const db = require("./db.js");

/**
 * Run this in development if you need to recreate your DB.
 * It'll add all the example values from seed.sql.
 */

const seedPath = join("src", "database", "seed.sql");
const seed = readFileSync(seedPath, "utf-8");
db.exec(seed);

console.log("DB seeded with example data");
