const db = require("../db/queries.js");

const getMessages = async (req, res) => {
  try {
    const data = await db.getAllUsers();
    const messages = data.map((message) => {
      const date = new Date(message.date);
      return { ...message, date: date.toLocaleString() };
    });

    res.render("messages", { messages: messages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const addMessage = async (req, res) => {
  try {
    const { username, text } = req.body;
    const date = new Date();

    await db.addMessage(username, text, date);

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = { getMessages, addMessage };
