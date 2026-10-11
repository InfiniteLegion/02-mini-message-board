const pool = require("./pool.js");

const getAllUsers = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const addMessage = async (username, text, date) => {
  await pool.query(
    "INSERT INTO messages (username, text, date) VALUES ($1, $2, $3)",
    [username, text, date],
  );
};

module.exports = { getAllUsers, addMessage };
