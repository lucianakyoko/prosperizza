'use client';
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

import { Title } from "@/components/Title";
import { PromotionItem } from "./PromotionItem";
import { PizzaDetails } from "@/components/PizzaDetails";
import { promotions } from "./promotions";

export const PromotionSection = () => {
  const { isOpen } = useContext(ModalContext);

  return (
    <section className="flex flex-col gap-5 lg:gap-6">
      <Title type='dark'>Promoções Que Debugam A Fome</Title>
      <ul className="flex flex-col gap-4 lg:gap-6 items-center sm:items-start lg:flex-row">
        {promotions.map(promotion => (
          <PromotionItem promotion={promotion} />
        ))}
      </ul>

      { isOpen && <PizzaDetails />}
    </section>
  );
}