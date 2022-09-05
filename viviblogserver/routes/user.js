const { Sequelize, Op } = require("sequelize");
const User = require("../models").user;
const express = require("express");

const router = express.Router();

router.get("/users/:id", (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => res.status(400).send(error));
});

router.post("/users", (req, res) => {
  let {email} = req.body
  User.findOne({ where: { email: email } })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
