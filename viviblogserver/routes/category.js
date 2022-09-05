const { Sequelize, Op } = require("sequelize");
const Category = require("../models").category;
const express = require("express");

const router = express.Router();

router.get("/categories", (req, res) => {
  Category.findAll()
    .then((categorias) => {
      res.status(200).json(categorias);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/categories/:id", (req, res) => {
  Category.findOne({ where: { id: req.params.id } })
    .then((categorias) => {
      res.status(200).json(categorias);
    })
    .catch((error) => res.status(400).send(error));
});

router.post("/categories", async (req, res) => {
  let { nombre } = req.body;
  try {
    await Category.create(
      {
        nombre
      },
      {
        fields: ["nombre"],
      }
    );
    res.json({ message: "Categoria Creada!" });
  } catch (error) {
    res.status(500).json({ message: "Ocurrio Un Problema" });
  }
});

module.exports = router
