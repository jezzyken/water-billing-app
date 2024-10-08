const express = require("express");
const router = express.Router();

const itemController = require("../../controllers/collections.controller");

router.get("/", itemController.get).post("/", itemController.add);

router
  .get("/:id", itemController.getById)
  .put("/:id", itemController.update)
  .delete("/:id", itemController.remove);

  router
  .get("/consumer/:id", itemController.getByConsumerId)

  module.exports = router;
