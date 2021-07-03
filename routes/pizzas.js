const express = require("express");
const router = express.Router();
const PizzaController = require("../controllers/PizzaController");
const verificarIdMiddleware = require("../middlewares/verificarId");

router.get("/", PizzaController.listar);

router.get("/:id", verificarIdMiddleware, PizzaController.buscarPizzaPeloId);

router.post("/", PizzaController.criarUmaPizza);

router.put("/:id", verificarIdMiddleware, PizzaController.editarUmaPizza);

router.delete("/:id", verificarIdMiddleware, PizzaController.deletarUmaPizza);

module.exports = router;
