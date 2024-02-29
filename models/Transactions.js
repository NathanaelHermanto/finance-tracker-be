const supabase = require("../services/ClientService");

exports.getAllTransactions = async () => {
  try {
    const { data, error } = await supabase.from("transactions").select("*");

    if (error) {
      throw new Error(`Supabase query failed: ${error.message}`);
    }
    return data;
  } catch (error) {
    throw new Error(`Error fetching transactions: ${error.message}`);
  }
};

exports.saveTransaction = async (amount, type, notes) => {
    try {
        const { data, error } = await supabase
          .from('transactions')
          .insert([{ amount: amount, type: type, notes: notes }])
          .select();
        
        if (error) {
          throw new Error(`Supabase query failed: ${error.message}`);
        }
  
        return data;
      } catch (error) {
        throw new Error(`Error saving transaction: ${error.message}`);
      }
}

exports.getBalance = async () => {
  try {
    const { data, error } = await supabase.rpc("get_balance");

    if (error) {
      throw new Error(`Supabase query failed: ${error.message}`);
    }
    return data;
  } catch (error) {
    throw new Error(`Error fetching transactions: ${error.message}`);
  }
};
