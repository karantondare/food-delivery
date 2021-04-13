const bcrypt = require("bcryptjs"); // string hasher
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/menuModel.js");

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doen't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser.id },
      "user",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
  console.log("here", req.body);
  try {
    console.log("now here");

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await new User.create({
      email,
      password: hashedPassword,
      fullname,
    });
    console.log("here", result);
    const token = jwt.sign({ email: result.email, id: result.id }, "user", {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
