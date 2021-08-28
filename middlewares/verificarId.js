const PizzaModel = require("../database/models/Pizza");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    await PizzaModel.findById(id);
    next();
  } catch (error) {
    return res.status(400).json({ mensagem: "Pizza não encontrada" });
  };
};
