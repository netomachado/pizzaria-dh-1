const express = require("express");
const app = express();

const pizzas = require("./database/pizzas.json");

const listarTodasAsPizzas = () => {
  let conteudo = "";

  pizzas.forEach((pizza) => {
    conteudo += `
      id: ${pizza.id}
      Sabor: ${pizza.sabor}
      Categoria: ${pizza.categoria}
      Preço: ${pizza.preco}
    `;
  });

  return conteudo;
};

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

adicionarPizza("Presunto", "Salgado", 25);
adicionarPizza("Catupiry", "Vegetariana", 40);

console.log(listarTodasAsPizzas());

const procurarPizzaPeloNome = function (nomePizza) {
  const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor === nomePizza);

  if (!pizzaEncontrada) return `A pizza sabor ${nomePizza} não foi encontrada.`;

  // return pizzaEncontrada
  //   ? pizzaEncontrada
  //   : `A pizza sabor ${sabor} não foi encontrada.`;

  return pizzaEncontrada;
};

app.listen(3000, () => console.log("O servidor ta on!!!11!!!!"));
