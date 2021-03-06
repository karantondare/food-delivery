import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { red, green } from "@material-ui/core/colors";
import toast from "react-hot-toast";
import formatProductPrice from "../utlis/formatProductPrice";

const PizzaCard = ({ pizza }) => {
  const {
    addItem,
    cartDetails,
    incrementItem,
    decrementItem,
  } = useShoppingCart();

  const price = formatProductPrice(pizza);

  const addToCart = () => {
    addItem(pizza);
    toast.success(`${pizza.name} added to your cart`);
  };
  const increamentQuantity = () => {
    incrementItem(pizza.id);
    toast.success(`${pizza.name} added to your cart`);
  };
  const decreamentQuantity = () => {
    decrementItem(pizza.id);
    toast.error(`${pizza.name} removed from your cart`);
  };

  const pizzaId = pizza.id;
  const pizzaCartDetails = cartDetails[pizzaId];

  return (
    <div className="w-64 h-2/4 h-full  overflow-hidden ">
      <img className="w-full rounded-t-lg	" src={pizza.image} alt="pizza" />
      <div className="text-center flex flex-col h-56 justify-around items-between pb-4 border-l-2  border-r-2 border-b-2 border-gray-200 rounded-b-lg">
        <div>
          <h2 className="mt-3 text-lg">{pizza.name}</h2>
          <div className="flex justify-center">
            <span>
              [
              {pizza.veg ? (
                <FiberManualRecordIcon style={{ color: green[500] }} />
              ) : (
                <FiberManualRecordIcon style={{ color: red[500] }} />
              )}
              ]
            </span>
            <p className="text-md pl-4">[11 Inch]</p>
          </div>
        </div>
        <div className="text-gray-400 text-sm pt-4">{pizza.description}</div>
        <div className="flex items-center justify-around mt-6">
          <span className="font-bold text-lg">{price}</span>

          {pizzaCartDetails && pizzaCartDetails["quantity"] ? (
            <div className="flex justify-between">
              <button
                onClick={decreamentQuantity}
                className="rounded-l-full	border-2 border-yellow-500 px-2 transition duration-500 ease-in-out"
              >
                <RemoveIcon />
              </button>
              <p className="px-4 font-bold border-yellow-500 border-t-2	border-b-2 transition duration-500 ease-in-out	">
                {pizzaCartDetails.quantity}
              </p>
              <button
                onClick={increamentQuantity}
                className="rounded-r-full	border-2 border-yellow-500 px-2"
              >
                <AddIcon />
              </button>
            </div>
          ) : (
            <button
              className="py-1 px-6 rounded-full border-2 border-yellow-500 flex items-center font-bold text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out"
              onClick={addToCart}
            >
              <AddIcon />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
