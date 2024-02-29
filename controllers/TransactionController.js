const asyncHandler = require("express-async-handler");
const supabase = require("../services/ClientService");
const { validationResult } = require("express-validator");
const transactions = require("../models/Transactions");

exports.get_transaction_list = asyncHandler(async (req, res, next) => {
  const data = await transactions.getAllTransactions();
  res.status(200).json({ data });
});

exports.get_transaction_by_id = asyncHandler(async (req, res, next) => {
  res.send(`TODO return transaction by id: ${req.params.id}`);
});


exports.post_transaction = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { amount, type, notes } = req.body;
    const savedTransaction = await transactions.saveTransaction(amount, type, notes);
    res.status(200).json({ savedTransaction });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "permission is missing" });
  }
});

exports.patch_transaction_by_id = asyncHandler(async (req, res, next) => {
  res.send("TODO update/patch transaction by id");
});

exports.delete_transaction_by_id = asyncHandler(async (req, res, next) => {
  res.send("TODO delete transaction by id");
});

exports.get_balance = asyncHandler(async (req, res, next) => {
  const data = await transactions.getBalance();
  res.status(200).json({ data });
});
