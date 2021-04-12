import React from "react";
import heroPizza from "../assets/hero-pizza.png";
import PizzaCard from "../components/PizzaCard";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  let { data: menu, isLoading } = useQuery("Pizzas", () =>
    axios("http://localhost:3001/menu").then((res) => res.data.menu)
  );

  const bestPizzas = [];

  if (!isLoading) {
    for (let i = 0; i < 4; i++) {
      const value = Math.floor(Math.random() * menu?.length);
      bestPizzas.push(menu[value]);
      const newMenu = menu.filter((item) => bestPizzas[i].id !== item.id);
      menu = newMenu;
    }
    console.log("menu", menu);
    console.log("best", bestPizzas);
  }

  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto flex justify-between items-center py-16 ">
          <div className="w-1/2 ">
            <h6 className="text-lg italic ">Craving for a pizza?</h6>
            <h2 className="text-6xl font-bold">Don't Wait!</h2>
            <button className="mt-4 py-1 px-6 rounded-full border-2 border-yellow-500 flex items-center font-bold text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img src={heroPizza} alt="pizza" />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8 flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold mb-8">Best Selling Pizza's</h3>
        {!isLoading && (
          <div className="grid grid-cols-4 gap-12 mx-auto">
            {bestPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        )}
        <h3 className="mx-auto mt-8 px-6 py-2 text-2xl rounded-full border-2 border-yellow-500 flex items-center font-bold text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out">
          <Link to="/menu">Our Menu!</Link>
        </h3>
      </section>
    </>
  );
};

export default Home;
