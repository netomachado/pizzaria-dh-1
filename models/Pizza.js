const pizzas = require("../database/pizzas.json");
const fs = require("fs");

const PizzaModel = {
  findAll: () => pizzas,
  create: (pizza) => {
    pizzas.push(pizza);
    fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));
  },
};

module.exports = PizzaModel;
