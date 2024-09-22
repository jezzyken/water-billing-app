const express = require("express");
const router = express.Router();

const itemController = require("../../controllers/billing.controller");

router.get("/", itemController.get).post("/", itemController.add);

router.get("/templates", itemController.sendHTMLTemplate)

router
  .get("/:id", itemController.getById)
  .put("/:id", itemController.update)
  .delete("/:id", itemController.remove);

  router
  .get("/:id/consumer/item", itemController.getConsumerItemById)

  router
  .get("/:id/consumer/items", itemController.getConsumerItemsById)


  module.exports = router;
