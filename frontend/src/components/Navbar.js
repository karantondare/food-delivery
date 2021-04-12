import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  const { cartCount } = useShoppingCart();

  return (
    <header className="flex justify-between items-center   body-font p-4 text-lg font-semibold">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="Dominos Pizza" />
          <h2 className="ml-2">Lucali Pizza</h2>
        </div>
      </Link>
      <div>
        <ul className="flex items-center">
          <li className="ml-6 hover:text-red-500 transition duration-500 ease-in-out">
            <a href="/menu">Menu</a>
          </li>
          <li className="ml-6 hover:text-red-500 transition duration-500 ease-in-out">
            <a href="/">Offers</a>
          </li>
          <li className="ml-6 hover:text-red-500 transition duration-500 ease-in-out">
            <a href="/auth">Login</a>
          </li>
          <li className="ml-6 hover:text-red-500 transition duration-500 ease-in-out">
            <a href="/">Register</a>
          </li>
          <li className="ml-6 bg-yellow-500 inline-block px-4 py-2 rounded-full ">
            <Link to="/cart" className="flex">
              <img src={cart} alt="Dominos Pizza" />
              <span className="text-white pl-2 text-xl">({cartCount})</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
