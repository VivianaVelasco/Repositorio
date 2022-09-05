const { Sequelize, Op } = require("sequelize");
const Post = require("../models").post;
const User = require("../models").user;
const Category = require("../models").category;
const express = require("express");

const router = express.Router();

router.get("/posts", (req, res) => {
  Post.findAll({
    include: [
      { model: Category, required: true },
      { model: User, required: true },
    ],
    attributes: { exclude: ["categoryId", "userId", "iduser", "idcategory"] },
  })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

router.get("/posts/:id", (req, res) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => res.status(400).send(error));
});

router.post("/posts", async (req, res) => {
  const { title, description, iduser, idcategory } = req.body;
  try {
    await Post.create(
      {
        title,
        description,
        iduser,
        idcategory,
      },
      {
        fields: ["title", "description", "iduser", "idcategory"],
      }
    );
    res.json({ message: "Post Creado!" });
  } catch (error) {
    res.status(400).json({ message: "Ocurrio Un Problema" });
  }
});

module.exports = router;
