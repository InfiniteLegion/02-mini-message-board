const { Router } = require("express");
const { getMessages } = require("../controllers/messageController.js");

const messageRouter = Router();

messageRouter.get("/", getMessages);

module.exports = messageRouter;
