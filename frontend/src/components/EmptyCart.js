import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold mb-2">Oops! Your cart is empty.</h1>
      <p className="text-gray-500 text-lg">
        You can go to our menu page to check out of delicious pizza's
      </p>
      <img className="w-2/5 mx-auto" src={emptyCart} alt="empty cart" />
      <Link to="/">
        <button className="mx-auto my-4 py-1 px-6 rounded-full border-2 border-yellow-500 flex items-center font-bold text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out">
          Our Menu
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
