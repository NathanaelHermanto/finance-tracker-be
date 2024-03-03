const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const inventories = require("../models/Inventories")

exports.get_inventory_list = asyncHandler(async (req, res, next) => {
    const data = await inventories.getAllInventories();
    res.status(200).json({ data });
});

exports.get_inventory_by_id = asyncHandler(async (req, res, next) => {
  res.send(`TODO return inventory by id: ${req.params.id}`);
});

exports.post_inventory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { inventory_amount, type, notes } = req.body;
    const savedInventory = await inventories.saveInventory(inventory_amount, type, notes);
    res.status(200).json({ savedInventory });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "permission is missing" });
  }
});

exports.patch_inventory_by_id = asyncHandler(async (req, res, next) => {
  res.send("TODO update/patch inventory by id");
});

exports.delete_inventory_by_id = asyncHandler(async (req, res, next) => {
  res.send("TODO delete inventory by id");
});
