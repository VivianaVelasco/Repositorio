const { Sequelize, Op } = require("sequelize");
const User = require("../models").user;
const express = require("express");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado!", pass: true });
    }
    if (password.localeCompare(user.password)) {
      return res.status(404).json({
        message: "Usuario o constrasena no ingresado correctamente!",
        pass: true,
      });
    }
    return res
      .status(200)
      .json({ message: `Bienvenido ${email}!`, pass: false });
  } catch (error) {
    return res.status(400).json({ message: "Ocurrio Un Problema", pass: true });
  }
});

router.post("/register", async (req, res) => {
  const { name, lastname, phone_number, email, password } = req.body;
  try {
    await User.create(
      {
        name,
        lastname,
        phone_number,
        email,
        password,
      },
      {
        fields: ["name", "lastname", "phone_number", "email", "password"],
      }
    );
    return res.status(200).json({ message: "User creado!", pass: true });
  } catch (error) {
    return res.status(400).json({ message: "Ocurrio Un Problema", pass: true });
  }
});

module.exports = router;
