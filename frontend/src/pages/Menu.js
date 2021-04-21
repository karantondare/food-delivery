import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import PizzaCard from "../components/PizzaCard";

const Menu = () => {
  const { data: menu, isLoading } = useQuery("Pizzas", () =>
    axios("http://localhost:3001/menu").then((res) => res.data)
  );

  return (
    <section className="container mx-auto py-8">
      <h3 className="text-xl font-bold mb-8">Our Pizza's</h3>
      {!isLoading && (
        <div className="grid grid-cols-4 gap-12 mx-auto">
          {menu.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Menu;
