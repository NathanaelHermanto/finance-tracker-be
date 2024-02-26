const express = require("express");
const { body } = require('express-validator');
const router = express.Router();

const transactionController = require("../controllers/TransactionController");

router.get("/", transactionController.get_transaction_list);
router.get("/balance", transactionController.get_balance);
router.get("/:id", transactionController.get_transaction_by_id);

router.post("/inject-money", transactionController.post_inject_money);
router.post(
  "/sell",
  [
    body("amount").notEmpty().withMessage("Amount is required"),
    body("inventory_amount")
      .notEmpty()
      .withMessage("Inventory amount is required"),
  ],
  transactionController.post_sell
);
router.post("/sell-delivery", transactionController.post_sell_delivery);
router.post("/buy", transactionController.post_buy);

router.patch("/:id", transactionController.patch_transaction_by_id);

router.delete("/:id", transactionController.delete_transaction_by_id);

module.exports = router;