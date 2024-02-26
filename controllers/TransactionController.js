const asyncHandler = require("express-async-handler");
const supabase = require("../services/ClientService");
const { validationResult } = require("express-validator");

exports.get_transaction_list = asyncHandler(async (req, res, next) => {
  try {
    const { data, error } = await supabase.from("transactions").select("*");

    if (error) {
      throw new Error(`Supabase query failed: ${error.message}`);
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

exports.get_transaction_by_id = asyncHandler(async (req, res, next) => {
  res.send(`TODO return transaction by id: ${req.params.id}`);
});

exports.post_inject_money = asyncHandler(async (req, res, next) => {
  res.send("TODO inject money");
});

exports.post_sell = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send(`TODO sell ${req.body.amount} ${req.body.inventory_amount}`);
});

exports.post_sell_delivery = asyncHandler(async (req, res, next) => {
  res.send("TODO sell delivery");
});

exports.post_buy = asyncHandler(async (req, res, next) => {
  res.send("TODO buy");
});

exports.patch_transaction_by_id = asyncHandler(async (req, res, next) => {
  res.send("TODO update/patch transaction by id");
});

exports.delete_transaction_by_id = asyncHandler(async (req, res, next) => {
  res.send("TODO delete transaction by id");
});

exports.get_balance = asyncHandler(async (req, res, next) => {
  try {
    const { data, error } = await supabase.rpc("get_balance");

    if (error) {
      throw new Error(`Supabase query failed: ${error.message}`);
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
