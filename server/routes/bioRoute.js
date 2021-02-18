const Router = require("express").Router();
const Storage = require("../config/multer");
const path = require("path");
const Bio = require("../models/Bio");
const multer = require("multer");
const crypto = require("crypto");

let encryptedName;

Router.get("/", (req, res) => {
  res.send("Hello");
});

const storage = multer.diskStorage({
  destination: "../client/public/uploads",
  filename: function (req, file, cb) {
    crypto.randomBytes(16, (err, buf) => {
      if (err) throw err;
      encryptedName = buf.toString("hex");
    });
    cb(null, encryptedName + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
}).single("file");

Router.post("/", upload, (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.json({ msg: "Successful" });
});

module.exports = Router;
