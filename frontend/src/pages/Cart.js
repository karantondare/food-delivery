import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartOrderSummary from "../components/CartOrderSummary";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { cartCount } = useShoppingCart();

  return (
    <section className="bg-gray-100 py-16">
      {cartCount ? <CartOrderSummary /> : <EmptyCart />}
    </section>
  );
};

export default Cart;
