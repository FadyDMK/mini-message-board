const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

exports.newControllerPost = asyncHandler(async (req, res) => {
  const message = {
    text: req.body.text,
    username: req.body.username,
    added: new Date(),
  };
  db.addMessage(message);
  res.redirect("/");
});
