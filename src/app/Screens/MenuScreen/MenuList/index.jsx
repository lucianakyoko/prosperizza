'use client';
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";
import { PizzaItemCard } from "@/components/PizzaItemCard";
import { PizzaDetails } from "@/components/PizzaDetails";

export const MenuList = () => {
  const {isOpen} = useContext(ModalContext);
  return (
    <div>
      <ul className="flex gap-4 sm:gap-6 flex-wrap py-8 sm:py-9 lg:py-12">
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
        <PizzaItemCard />
      </ul>

      { isOpen && <PizzaDetails /> }
    </div>
  );
}