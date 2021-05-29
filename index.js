const express = require("express");
const app = express();

app.use(express.json());

const pizzas = require("./database/pizzas.json");

app.get("/pizzas", (req, res) => res.json(pizzas));

// *DESAFIO* Criar uma rota para criar uma nova pizza, utilizem o método http correto, adicione no array de pizzas e retorne essa nova pizza como json. IMPORTANTE: a nova pizza precisa ter id

const adicionarPizza = function (sabor, categoria, preco) {
  const pizzaNova = {
    id: pizzas[pizzas.length - 1].id + 1,
    sabor,
    categoria,
    preco,
  };

  pizzas.push(pizzaNova);

  console.log(`A pizza de ${sabor} foi adicionada com sucesso!`);
};

const procurarPizzaPeloNome = function (nomePizza) {
  const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor === nomePizza);

  if (!pizzaEncontrada) return `A pizza sabor ${nomePizza} não foi encontrada.`;

  // return pizzaEncontrada
  //   ? pizzaEncontrada
  //   : `A pizza sabor ${sabor} não foi encontrada.`;

  return pizzaEncontrada;
};

app.listen(3000, () => console.log("O servidor ta on!!!11!!!!"));
