const db = require("../public/db.js");

const getMessages = async (req, res) => {
  try {
    const data = await db.getMessages();
    const messages = data.map((message) => {
      const date = new Date(message.date);

      return { ...message, date: date.toLocaleString() };
    });

    res.render("messages", { messages: messages });
  } catch (error) {
    console.error(`Error retrieving messages: ${error}`);
    res.status(500).send("Internal server error");
  }
};

// const addMessage = async

module.exports = { getMessages };
