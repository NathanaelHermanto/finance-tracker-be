const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const transactions = require("../models/Transactions");

exports.get_transaction_list = asyncHandler(async (_req, res, _next) => {
  const data = await transactions.getAllTransactions();
  res.status(200).json({ data });
});

exports.get_transaction_by_id = asyncHandler(async (req, res, _next) => {
  const id = req.params.id;
  const data = await transactions.getTransactionById(id);
  res.status(200).json({ data });
});

exports.post_transaction = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { amount, type, notes } = req.body;
    const data = await transactions.saveTransaction(amount, type, notes);
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "permission is missing" });
  }
});

exports.patch_transaction_by_id = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { amount, notes } = req.body;

  try {
    // Check if either amount or notes is provided in the request body
    if (!amount && !notes) {
      return res
        .status(400)
        .json({ error: "Amount or notes must be provided for update" });
    }

    // Construct the update object with provided fields
    const updateObject = {};
    if (amount) {
      updateObject.amount = amount;
    }
    if (notes) {
      updateObject.notes = notes;
    }

    // Update the transaction with the provided fields

    const data = await transactions.updateTransactionById(id, updateObject);

    // Check if any records were updated
    if (data.length === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.status(200).json({ transaction: data[0] });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

exports.delete_transaction_by_id = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = await transactions.getTransactionById(id);

    if (transaction.length===0) {
      res.status(400).json({ message: `Transaction with id: ${id} is not found` });
    } else {
      // delete
      await transactions.deleteTransactionById(id);
      res.status(200).json({ message: "Transaction deleted successfully" });
    }

  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "permission is missing" });
  }
});

exports.get_balance = asyncHandler(async (req, res, next) => {
  const data = await transactions.getBalance();
  res.status(200).json({ data });
});
