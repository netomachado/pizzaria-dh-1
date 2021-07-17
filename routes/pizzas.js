const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const PizzaController = require("../controllers/PizzaController");
const verificarIdMiddleware = require("../middlewares/verificarId");
const PizzaModel = require("../models/Pizza");

router.get("/", PizzaController.listar);

router.get("/criar", (req, res) => {
  res.render("criarNovaPizza", { title: "Criar nova pizza"})
});

router.get("/editar/:id", (req, res) => {
  const { id } = req.params;
  const pizza = PizzaModel.findById(id);
  res.render("editarPizza", { pizza })
});

router.get("/:id", verificarIdMiddleware, PizzaController.buscarPizzaPeloId);

router.post("/", PizzaController.criarUmaPizza);

router.put("/:id", verificarIdMiddleware, PizzaController.editarUmaPizza);

router.delete("/:id", verificarIdMiddleware, PizzaController.deletarUmaPizza);

module.exports = router;
