const asyncHandler = require("express-async-handler");
const supabase = require("../services/ClientService");

// transaction list
exports.get_transaction_list = asyncHandler(
  async (req, res, next) => {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*');

      if (error) {
        throw new Error(`Supabase query failed: ${error.message}`);
      }

      res.status(200).json({ data });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


// transaction
exports.get_transaction_by_id = asyncHandler(
    async (req, res, next) => {
      res.send(`TODO return transaction by id: ${req.params.id}`);
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
      try {
        const { data, error } = await supabase
          .rpc('get_balance');
  
        if (error) {
          throw new Error(`Supabase query failed: ${error.message}`);
        }
  
        res.status(200).json({ data });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

exports.get_cash_balance = asyncHandler(
    async (req, res, next) => {
      res.send("TODO return cash balance");
    });

exports.get_credit_balance = asyncHandler(
    async (req, res, next) => {
      res.send("TODO return credit balance");
    });