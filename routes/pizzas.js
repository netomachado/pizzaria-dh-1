const express = require("express");
const router = express.Router();
const PizzaController = require("../controllers/PizzaController");
const verificarIdMiddleware = require("../middlewares/verificarId");
const { Categoria } = require('../database/models')



router.get('/', async function(req, res){
  const pizzas = await PizzaController.listar();
  return res.render("pizzas", { pizzas, title: "Homepage" });
});


router.get("/cadastrar", async (req, res) => {
  const categorias = await Categoria.findAll();
  res.render("criarNovaPizza", { title: "Criar nova pizza", categorias})
});

router.get("/editar/:id", async (req, res) => {
  const { id } = req.params;
  const pizza = await PizzaController.buscarPizzaPeloId(id);
  res.render("editarPizza", { pizza })
});

router.get("/:id", verificarIdMiddleware, PizzaController.buscarPizzaPeloId);


router.post('/', async function( req, res){
  const{ sabor, categoria, preco }= req.body;
  
  await PizzaController.criarUmaPizza(sabor, categoria, preco);

  res.status(201).redirect("/pizzas");
});

router.put("/:id", verificarIdMiddleware, async function(req, res){
  const { id } = req.params;
  const { sabor, categoria, preco } = req.body;
  try{
    await PizzaController.editarUmaPizza(id, sabor, categoria, preco)
    return res.redirect('./pizzas')
  } catch {
    return res.status(400).json({ err });
  }
  
});


router.delete("/:id", verificarIdMiddleware, async function(req, res){
  const { id } = req.params;
  await PizzaController.deletarUmaPizza(id);

  return res.redirect("/pizzas")
});

module.exports = router;
