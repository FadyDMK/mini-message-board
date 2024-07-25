const { v4: uuidv4 } = require("uuid");
const messages = [
  {
    id: "1",
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: "2",
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    id: "3",
    text: "Arrivederci!",
    user: "Bruno",
    added: new Date(),
  },
];

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const message = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
    id: uuidv4(),
  };
  messages.push(message);
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  res.render("message", {
    message: messages.find((message) => message.id === req.params.id),
  });
});

module.exports = router;
