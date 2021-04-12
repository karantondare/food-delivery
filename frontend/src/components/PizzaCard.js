import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { red, green, blue } from "@material-ui/core/colors";
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
    <div className="w-64 h-2/4 h-full border-2 border-gray-300 rounded-lg overflow-hidden ">
      <img className="mb-4 w-full" src={pizza.image} alt="pizza" />
      <div className="text-center flex flex-col items-between pb-4">
        <div>
          <h2 className=" text-lg">{pizza.name}</h2>
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
                onClick={increamentQuantity}
                className="rounded-l-full	border-2 border-yellow-500 px-2"
              >
                <AddIcon />
              </button>
              <p className="px-4 border-yellow-500 border-t-2	border-b-2 transition duration-500 ease-in-out	">
                {pizzaCartDetails.quantity}
              </p>
              <button
                onClick={decreamentQuantity}
                className="rounded-r-full	border-2 border-yellow-500 px-2 transition duration-500 ease-in-out"
              >
                <RemoveIcon />
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
