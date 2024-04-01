'use client';
import NextLink from "next/link";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

import { PizzaDetails } from "@/components/PizzaDetails";
import { PizzaItemCard } from "@/components/PizzaItemCard";
import { Title } from "@/components/Title";

export const FavoritesSection = ({pizzas}) => {
  const {isOpen} = useContext(ModalContext);
  const favorites = pizzas.slice(0, 6);

  return(
    <section className="mt-7 sm:mt-9 lg:mt-12 flex flex-col gap-5 lg:gap-6">
      <div className="flex items-center justify-between">
        <Title type='dark'>As Preferidas Dos Coders</Title>
        <NextLink href='cardapio'>
          <span className="text-red-100 text-sm underline">ver todos</span>
        </NextLink>
      </div>

      <ul className="flex flex-wrap gap-4 sm:gap-6 justify-start xl:justify-between">
        {favorites.map(pizza => (
          <PizzaItemCard key={pizza._id} pizza={pizza}/>
        ))}
      </ul>
      { isOpen && <PizzaDetails /> }
      
    </section>
  );
}