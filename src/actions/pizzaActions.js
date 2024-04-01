'use server';

import Pizza from "@/models/Pizza";

export const getPizzas = async () => {
  const pizzas = await Pizza.find().lean(); 

  const simplifiedPizzas = pizzas.map(pizza => {
    return JSON.parse(JSON.stringify(pizza));
  });

  return simplifiedPizzas;
}