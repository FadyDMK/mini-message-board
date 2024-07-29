const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage(message) {
  await pool.query(
    "INSERT INTO messages (text, username) VALUES ($1, $2)",
    [message.text, message.username]
  );
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows[0];
}

module.exports = {
    getAllMessages,
    addMessage,
    getMessageById,
};
