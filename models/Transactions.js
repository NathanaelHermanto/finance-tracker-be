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

exports.getTransactionById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("id", id);

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
      .from("transactions")
      .insert([{ amount: amount, type: type, notes: notes }])
      .select();

    if (error) {
      throw new Error(`Supabase query failed: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Error saving transaction: ${error.message}`);
  }
};

exports.updateTransactionById = async (id, updateObject) => {
  try {
    const { data, error } = await supabase
      .from("transactions")
      .update(updateObject)
      .eq("id", id)
      .select("*");

    if (error) {
      throw new Error(`Supabase query failed: ${error.message}`);
    }
    return data;
  } catch (error) {
    throw new Error(`Error updating transaction: ${error.message}`);
  }
};

exports.deleteTransactionById = async (id) => {
    try {
      const { data, error } = await supabase
        .from("transactions")
        .delete()
        .eq("id", id);
        
      if (error) {
        throw new Error(`Supabase query failed: ${error.message}`);
      }

    } catch (error) {
      throw new Error(`Error deleting transaction: ${error.message}`);
    }
  };

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
