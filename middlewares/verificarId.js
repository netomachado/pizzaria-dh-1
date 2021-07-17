const PizzaModel = require("../models/Pizza");

module.exports = (req, res, next) => {
  const { id } = req.params;


  const pizzaExiste = PizzaModel.findById(id);

  if (!pizzaExiste) {
    return res.status(400).json({ mensagem: "Pizza não encontrada" });
  }

  next();
};
