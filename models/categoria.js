const { Categoria } = require("../database/models");


  

  exports.listar= () => Categoria.findAll();

  

