import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import formatProductPrice from "../utlis/formatProductPrice";

const CartItem = ({ item }) => {
  const { setItemQuantity } = useShoppingCart();
  const handleSetItemQuantity = (e) => setItemQuantity(item.id, e.target.value);

  return (
    <div className="flex justify-between items-center my-8">
      <div className="flex items-center">
        <img className="w-2/5" src={item.image} alt="pizza" />
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
      <span className="text-lg font-bold">
        {formatProductPrice(item)} x {item.quantity}
      </span>
    </div>
  );
};

export default CartItem;
