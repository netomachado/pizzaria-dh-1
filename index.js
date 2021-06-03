const express = require("express");
const { v4 } = require("uuid");
const fs = require("fs");
// const uuid = require('uuid');

const app = express();

app.use(express.json());

const pizzas = require("./database/pizzas.json");

app.get("/pizzas", (req, res) => res.json(pizzas));

app.post("/pizzas", (req, res) => {
  const { sabor, categoria, preco } = req.body;

  const pizzaNova = {
    id: v4(),
    sabor,
    categoria,
    preco,
  };

  pizzas.push(pizzaNova);

  fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));
  res.status(201).json(pizzaNova);
});

app.put("/pizzas/:id", (req, res) => {
  const { id } = req.params;
  const { sabor, categoria, preco } = req.body;

  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === id);

  if (!pizzaEncontrada) {
    return res.status(400).json({ mensagem: "Pizza não encontrada" });
  }

  pizzaEncontrada.sabor = sabor;
  pizzaEncontrada.categoria = categoria;
  pizzaEncontrada.preco = preco;

  fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));

  return res.json(pizzaEncontrada);
});

// const adicionarPizza = function (sabor, categoria, preco) {
//   const pizzaNova = {
//     id: pizzas[pizzas.length - 1].id + 1,
//     sabor,
//     categoria,
//     preco,
//   };

//   pizzas.push(pizzaNova);

//   console.log(`A pizza de ${sabor} foi adicionada com sucesso!`);
// };

// const procurarPizzaPeloNome = function (nomePizza) {
//   const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor === nomePizza);

//   if (!pizzaEncontrada) return `A pizza sabor ${nomePizza} não foi encontrada.`;

//   // return pizzaEncontrada
//   //   ? pizzaEncontrada
//   //   : `A pizza sabor ${sabor} não foi encontrada.`;

//   return pizzaEncontrada;
// };

app.listen(3000, () => console.log("O servidor ta on!!!11!!!!"));
