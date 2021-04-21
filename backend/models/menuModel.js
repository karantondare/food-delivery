import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: String },
  currency: { type: String },
  veg: { type: Boolean },
});

const Menu = mongoose.model("menu", menuSchema);
export default Menu;
