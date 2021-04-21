import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  const { cartCount } = useShoppingCart();
  const userInfo = useSelector((state) => state.auth.authData);
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  return (
    <header className="flex justify-between items-center body-font p-4 text-lg font-semibold bg-white">
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

          {userInfo ? (
            <div className="relative inline-block text-left pl-8">
              <div>
                <button
                  type="button"
                  onClick={handleChange}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {userInfo.name}
                  <ExpandMoreIcon />
                </button>
              </div>

              {dropdown && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Orders
                    </Link>
                    {/* <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Support
                    </a> */}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 text-red-500 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <li className="ml-6 hover:text-red-500 transition duration-500 ease-in-out">
              <a href="/auth">Login</a>
            </li>
          )}
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
