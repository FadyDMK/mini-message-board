const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

exports.showControllerGet = asyncHandler(async (req, res) => {
  const message = await db.getMessageById(req.params.id);
  res.render("message", {
    message: message,
  });
});
