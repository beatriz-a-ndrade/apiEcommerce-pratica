// ROTA RAIZ : "/product/"

const express = require("express");
const routes = express.Router();
const controller = require("../controller/pacientController");

routes.post("/create", controller.createNewProduct);
routes.get("/catalog", controller.getListProduct);
routes.get("/catalog/validity", controller.getListProductValidity);
routes.patch("/update/:id", controller.updateProduct);
routes.delete("/delete/:id", controller.deleteProduct);

module.exports = routes