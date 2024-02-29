const express = require("express");
const { body } = require('express-validator');
const router = express.Router();

const inventoryController = require("../controllers/InventoryController");

router.get("/", inventoryController.get_inventory_list);
router.get("/:id", inventoryController.get_inventory_by_id);

router.post(
  "/",
  [
    body("inventory_amount").notEmpty().withMessage("Inventory amount is required"),
    body("type")
      .notEmpty()
      .withMessage("type is required"),
    body("notes"),
  ],
  inventoryController.post_inventory
);

router.patch("/:id", inventoryController.patch_inventory_by_id);

router.delete("/:id", inventoryController.delete_inventory_by_id);

module.exports = router;