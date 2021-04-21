import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import formatProductPrice from "../utlis/formatProductPrice";

const CartItem = ({ item }) => {
  const { setItemQuantity } = useShoppingCart();
  const handleSetItemQuantity = (e) => setItemQuantity(item.id, e.target.value);

  return (
    <div className="flex justify-between items-center my-8">
      <div className="flex items-center">
        <img className="w-1/4	rounded-sm" src={item.image} alt="pizza" />
        <div className="pl-4">
          <h1 className="text-lg">{item.name}</h1>
          <span>Quantity : </span>
          <input
            style={{ width: 50 }}
            className="border-solid border-2"
            type="number"
            value={item.quantity}
            onChange={handleSetItemQuantity}
            min={0}
          />
        </div>
      </div>
      <div className="w-16">
        <span className="text-lg">
          {formatProductPrice(item)} x {item.quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
