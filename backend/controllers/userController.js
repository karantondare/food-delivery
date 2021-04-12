const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModal = require("../models/userModel.js");

const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);

  try {
    const existingUser = await UserModal.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name,
    });

    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      "user",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const signin = async (req, res) => {};