const express = require("express");
const usersController = require("../controller/users");
const router = express.Router();

router
  .post("", usersController.createProduct)
  .get("", usersController.getAllProducts)
  .get("/:id", usersController.getProduct)
  .put("/:id", usersController.replaceProduct)
  .patch("/:id", usersController.updateProduct)
  .delete("/:id", usersController.deleteProduct);

exports.router = router;