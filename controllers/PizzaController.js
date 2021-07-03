const { v4 } = require("uuid");
const PizzaModel = require("../models/Pizza");

const PizzaController = {
  buscarPizzaPeloId: (req, res) => {
    const { id } = req.params;
    const pizza = PizzaModel.findById(id);
    return res.json(pizza);
  },
  listar: (req, res) => {
    const pizzas = PizzaModel.findAll();
    // res.json(pizzas);
    res.render("pizzas", { pizzas });
  },
  criarUmaPizza: (req, res) => {
    const { sabor, categoria, preco } = req.body;

    const pizzaNova = {
      id: v4(),
      sabor,
      categoria,
      deleted: false,
      preco,
    };

    PizzaModel.create(pizzaNova);

    res.status(201).json(pizzaNova);
  },
  editarUmaPizza: (req, res) => {
    const { id } = req.params;
    const { sabor, categoria, preco } = req.body;

    const pizzaAtualizada = PizzaModel.update(id, {
      sabor,
      categoria,
      preco,
    });

    return res.json(pizzaAtualizada);
  },
  deletarUmaPizza: (req, res) => {
    const { id } = req.params;

    PizzaModel.destroy(id);

    res.status(204).send();
  },
};

module.exports = PizzaController;
