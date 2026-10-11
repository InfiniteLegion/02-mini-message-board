require("dotenv").config();
const { Pool } = require("pg");

const isLocal = /localhost|127.0.0.1/.test(process.env.DATABASE_URL || "");

console.log("DB local?", isLocal, "| NODE_ENV:", process.env.NODE_ENV, "| URL set:", !!process.env.DATABASE_URL);

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});
