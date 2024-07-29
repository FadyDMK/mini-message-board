const express = require("express");
const router = express.Router();
const newController = require("../controllers/newController");
const showController = require("../controllers/showController");
const db = require("../db/queries");

router.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });

});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", newController.newControllerPost);
router.get("/message/:id", showController.showControllerGet);

module.exports = router;
