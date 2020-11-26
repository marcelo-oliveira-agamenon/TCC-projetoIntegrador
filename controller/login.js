const User = require("../models/User");
const auth = require("./auth");
const fs = require("fs");

exports.auth = async (req, res) => {
  const { email, password } = req.body;

  return res.status(200).json({ email, password });
};
