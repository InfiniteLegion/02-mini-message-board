const express = require("express");
const messageRouter = require("./routers/messageRouter.js");
const path = require("node:path");

const app = express();
const assetsPath = path.join(__dirname, "public/css");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", messageRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server listening on port ${PORT}.\nhttp://localhost:${PORT}`);
});
