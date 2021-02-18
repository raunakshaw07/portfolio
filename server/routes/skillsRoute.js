const Router = require("express").Router();
const Skills = require("../models/SkillsModel");

Router.get("/", (req, res) => {
  Skills.find()
    .then((skill) => res.json(skill))
    .catch((err) => console.log(err));
});

Router.get("/:id", (req, res) => {
  Skills.findById(req.params.id)
    .then((skill) => res.json(skill))
    .catch((err) => console.log(err));
});

Router.post("/add", (req, res) => {
  const { title, desc, type, url, imgUrl } = req.body;
  console.log(req.body);
  const newSkill = new Skills({
    title,
    body: desc,
    type,
    url,
    imgUrl,
  });

  newSkill
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
});

Router.post("/update/:id", (req, res) => {
  const { title, desc, type, url, imgUrl } = req.body;
  Skills.findById(req.params.id)
    .then((skill) => {
      skill.title = title;
      skill.body = desc;
      skill.type = type;
      skill.url = url;
      skill.imgUrl = imgUrl;

      skill
        .save()
        .then(() => res.json("sent"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

Router.delete("/:id", (req, res) => {
  Skills.findByIdAndDelete(req.params.id)
    .then((skill) => res.json(skill))
    .catch((err) => console.log(err));
});

module.exports = Router;
