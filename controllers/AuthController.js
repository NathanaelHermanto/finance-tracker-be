const supabase = require("../services/ClientService");
const asyncHandler = require("express-async-handler");

exports.post_user_login = asyncHandler(
    async (req, res, next) => {
      const { email, password } = req.body;

      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      res.status(200).json({ user });
    });

exports.post_user_logout = asyncHandler(
    async (req, res) => {
        const { error } = await supabase.auth.signOut();

        res.status(200).json({ message: 'User logged out successfully' });
    });