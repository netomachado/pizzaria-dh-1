const { v4 } = require("uuid");
const PizzaModel = require("../models/Pizza");

const PizzaController = {
  buscarPizzaPeloId: (req, res) => {
    const { id } = req.params;
    console.log("oi")
    const pizza = PizzaModel.findById(id);
    return res.json(pizza);
  },
  listar: (req, res) => {
    const pizzas = PizzaModel.findAll();
    console.log(pizzas)
    res.render("pizzas", { pizzas, title: "Homepage" });
  },
  criarUmaPizza: (req, res) => {
    const { sabor, categoria, preco } = req.body;

    const pizzaNova = {
      id: v4(),
      sabor,
      categoria,
      deleted: false,
      preco: Number(preco),
    };

    PizzaModel.create(pizzaNova);

    res.status(201).redirect("/pizzas");
  },
  editarUmaPizza: (req, res) => {
    const { id } = req.params;
    const { sabor, categoria, preco } = req.body;

    PizzaModel.update(id, {
      sabor,
      categoria,
      preco,
    });

    return res.redirect("/pizzas");
  },
  deletarUmaPizza: (req, res) => {
    const { id } = req.params;
    
    PizzaModel.destroy(id);

    return res.redirect("/pizzas");
  },
};

module.exports = PizzaController;
