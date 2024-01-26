const asyncHandler = require("express-async-handler");

// transaction list
exports.get_transaction_list = asyncHandler(
    async (req, res, next) => {
      res.send("TODO return list of transactions");
    });

// transaction
exports.get_transaction_by_id = asyncHandler(
    async (req, res, next) => {
      res.send("TODO return transaction by id");
    });

exports.post_inject_money = asyncHandler(
    async (req, res, next) => {
      res.send("TODO inject money");
    });

exports.post_sell_cash = asyncHandler(
    async (req, res, next) => {
      res.send("TODO sell on cash");
    });

exports.post_sell_credit = asyncHandler(
    async (req, res, next) => {
      res.send("TODO sell on credit");
    });

exports.post_buy = asyncHandler(
    async (req, res, next) => {
      res.send("TODO buy");
    });

exports.patch_transaction_by_id = asyncHandler(
    async (req, res, next) => {
      res.send("TODO update/patch transaction by id");
    });

exports.delete_transaction_by_id = asyncHandler(
    async (req, res, next) => {
      res.send("TODO delete transaction by id");
    });


// / balance
exports.get_balance = asyncHandler(
    async (req, res, next) => {
      res.send("TODO return balance");
    });

exports.get_cash_balance = asyncHandler(
    async (req, res, next) => {
      res.send("TODO return cash balance");
    });

exports.get_credit_balance = asyncHandler(
    async (req, res, next) => {
      res.send("TODO return credit balance");
    });
