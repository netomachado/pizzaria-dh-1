const express = require("express");
const app = express();

const pizzas = [
  {
    id: 1,
    sabor: "Quatro queijos",
    categoria: "Salgada",
    preco: 15.89,
  },
  {
    id: 2,
    sabor: "Morango com Nutella",
    categoria: "Doce",
    preco: 30,
  },
  {
    id: 3,
    sabor: "Brócolis",
    categoria: "Vegetariana",
    preco: 35,
  },
  {
    id: 4,
    sabor: "Lombo canadense",
    categoria: "Salgada",
    preco: 25,
  },
];

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
