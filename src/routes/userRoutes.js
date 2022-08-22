// ROTA RAIZ : "/user/"

const express = require("express");
const routes = express.Router();
const controller = require("../controller/userController");

routes.post("/create", controller.createNewUser);
routes.post("/login", controller.userLogin);
routes.patch("/update/:id", controller.updateUser);
routes.delete("/delete/:id", controller.deleteUser);

module.exports = routes