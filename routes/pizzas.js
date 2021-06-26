const express = require("express");
const router = express.Router();
const PizzaController = require("../controllers/PizzaController");

router.get("/", PizzaController.listar);

router.post("/", PizzaController.criarUmaPizza);

router.put("/:id", PizzaController.editarUmaPizza);

router.delete("/:id", PizzaController.deletarUmaPizza);

module.exports = router;
