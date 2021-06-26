const { v4 } = require("uuid");
const PizzaModel = require("../models/Pizza");

const PizzaController = {
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

    const pizzaEncontrada = pizzas.find((pizza) => pizza.id === id);

    if (!pizzaEncontrada) {
      return res.status(400).json({ mensagem: "Pizza não encontrada" });
    }

    pizzaEncontrada.sabor = sabor;
    pizzaEncontrada.categoria = categoria;
    pizzaEncontrada.preco = preco;

    // fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));

    return res.json(pizzaEncontrada);
  },
  deletarUmaPizza: (req, res) => {
    const { id } = req.params;

    const newPizzas = pizzas.filter((pizza) => pizza.id !== id);

    // fs.writeFileSync("./database/pizzas.json", JSON.stringify(newPizzas));

    res.status(204).json();
  },
};

module.exports = PizzaController;
