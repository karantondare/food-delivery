import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import cartBlack from "../assets/cart-black.png";
import CartItem from "./CartItem";

const CartOrderSummary = () => {
  const handleSubmit = () => {};
  const userLogin = false;
  const { cartCount, formattedTotalPrice, cartDetails } = useShoppingCart();

  const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);
  console.log(cartItems);

  return (
    <div className="container mx-auto w-1/2">
      <div className="flex items-center border-b border-gray-300 pb-4">
        <img src={cartBlack} alt="cart" />
        <h1 className="font-bold ml-4 text-2xl">Order Summary</h1>
      </div>
      <div>
        {cartItems.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <hr />
      <div className="text-right py-4">
        <div>
          <span className="text-lg font-bold">Total Amount:</span>
          <span className="pl-2 text-lg font-bold text-yellow-500">
            {formattedTotalPrice}
          </span>
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit}>
            <input
              disabled={!userLogin}
              className="border border-gray-400 p-2 w-1/2 mb-4"
              type="text"
              placeholder="Phone Number"
            />
            <input
              disabled={!userLogin}
              className="border border-gray-400 p-2 w-1/2"
              type="text"
              placeholder="Address"
            />

            {userLogin ? (
              <button className="py-2 px-6 rounded-full border-2 border-yellow-500 text-md font-bold bg-yellow-500 text-white hover: hover:text-yellow-500 hover:bg-gray-100 transition duration-500 ease-in-out mb-8">
                Confirm and Pay
              </button>
            ) : (
              <button className="py-2 px-6 rounded-full border-2 border-yellow-500 text-md font-bold bg-yellow-500 text-white hover: hover:text-yellow-500 hover:bg-gray-100 transition duration-500 ease-in-out mb-8">
                Login to place your order.
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartOrderSummary;
