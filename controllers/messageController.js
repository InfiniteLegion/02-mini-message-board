const fs = require("fs/promises");
const path = require("path");

const dir = path.join(process.cwd(), "public");
const filePath = path.join(dir, "db.json");

const readMessages = async () => {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf-8"));
  } catch (error) {
    console.error(error);
  }
};

const getMessages = async (req, res) => {
  try {
    const content = await readMessages();
    const messages = content.map((message) => {
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
    const user = req.body.user;
    const text = req.body.text;
    const data = await readMessages();

    data.push({ user: user, text: text, date: new Date() });
    await fs.writeFile(filePath, JSON.stringify(data));

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = { getMessages, addMessage };
