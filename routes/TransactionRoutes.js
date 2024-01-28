const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/TransactionController");

router.get("/", transactionController.get_transaction_list);
router.get("/balance", transactionController.get_balance);
router.get("/cash-balance", transactionController.get_cash_balance);
router.get("/credit-balance", transactionController.get_credit_balance);
router.get("/:id", transactionController.get_transaction_by_id);

router.post("/inject-money", transactionController.post_inject_money);
router.post("/sell-cash", transactionController.post_sell_cash);
router.post("/sell-credit", transactionController.post_sell_credit);
router.post("/buy", transactionController.post_buy);

router.patch("/:id", transactionController.patch_transaction_by_id);

router.delete("/:id", transactionController.delete_transaction_by_id);

module.exports = router;