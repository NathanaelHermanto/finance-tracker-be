const express = require("express");
const { body } = require('express-validator');
const router = express.Router();

const transactionController = require("../controllers/TransactionController");

router.get("/", transactionController.get_transaction_list);
router.get("/balance", transactionController.get_balance);
router.get("/:id", transactionController.get_transaction_by_id);

router.post(
  "/",
  [
    body("amount").notEmpty().withMessage("Amount is required"),
    body("type")
      .notEmpty()
      .withMessage("type is required"),
    body("notes"),
  ],
  transactionController.post_transaction
);

router.patch("/:id", transactionController.patch_transaction_by_id);

router.delete("/:id", transactionController.delete_transaction_by_id);

module.exports = router;