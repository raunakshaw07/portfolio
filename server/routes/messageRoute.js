const Router = require("express").Router();
const Message = require("../models/MessageModel");

Router.get("/", (req, res) => {
  Message.find()
    .then((data) => res.json(data))
    .catch((e) => console.error(e));
});

Router.get("/:id", (req, res) => {
  Message.findOne({ _id: req.params.id })
    .then((msg) => res.json(msg))
    .catch((err) => console.error(err));
});

Router.post("/", (req, res) => {
  const { name, email, subject, msg } = req.body;
  const newMsg = new Message({
    name,
    email,
    subject,
    msg,
  });
  newMsg
    .save()
    .then(() => res.json({ msg: "Message Sent Successfully" }))
    .catch((err) => console.error(err));
});

Router.delete("/:id", (req, res) => {
  Message.findByIdAndDelete(req.params.id)
    .then(() => res.send({ msg: "Message Deleted" }))
    .catch((err) => console.error(err));
});

module.exports = Router;
