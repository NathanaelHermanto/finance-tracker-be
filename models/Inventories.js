const supabase = require("../services/ClientService");

exports.getAllInventories = async () => {
  try {
    const { data, error } = await supabase.from("inventories").select("*");

    if (error) {
      throw new Error(`Supabase query failed: ${error.message}`);
    }
    return data;
  } catch (error) {
    throw new Error(`Error fetching inventories: ${error.message}`);
  }
};

exports.saveInventory = async (inventory_amount, type, notes) => {
    try {
        const { data, error } = await supabase
          .from('inventories')
          .insert([
            {
              inventory_amount: inventory_amount,
              type: type,
              notes: notes,
            },
          ])
          .select();
        
        if (error) {
          throw new Error(`Supabase query failed: ${error.message}`);
        }
  
        return data;
      } catch (error) {
        throw new Error(`Error saving inventory: ${error.message}`);
      }
}
