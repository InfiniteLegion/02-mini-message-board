const { Router } = require("express");
const {
  getMessages,
  addMessage,
} = require("../controllers/messageController.js");

const messageRouter = Router();

messageRouter.get("/", getMessages);
messageRouter.post("/new", addMessage);

module.exports = messageRouter;
