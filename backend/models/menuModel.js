const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  name: {
    type: String,
    image: String,
    price: String,
    size: String,
  },
});

const Menu = mongoose.model("Menu", menuSchema);
