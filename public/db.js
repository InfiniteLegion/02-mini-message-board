const messages = [
  {
    user: "Obi Wan Kenobi",
    text: "Hello there!",
    date: "2026-10-07T14:19:43.365Z",
  },
  {
    user: "General Grievous",
    text: "General Kenobi!",
    date: "2026-10-07T14:25:43.365Z",
  },
  {
    user: "Anakin Skywalker",
    text: "You underestimate my power",
    date: "2026-10-08T12:59:43.365Z",
  },
];

const getMessages = async () => {
  return messages;
};

const addMessage = async (message) => {
  messages.push(message);
};

module.exports = { getMessages, addMessage };
