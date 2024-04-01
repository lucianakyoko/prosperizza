'use client';

import { Title } from "@/components/Title";
import { PromotionItem } from "./PromotionItem";
import { promotions } from "./promotions";

export const PromotionSection = () => {
  return (
    <section className="flex flex-col gap-5 lg:gap-6">
      <Title type='dark'>Promoções Que Debugam A Fome</Title>
      <ul className="flex flex-col gap-4 lg:gap-6 items-center sm:items-start lg:flex-row">
        {promotions.map(promotion => (
          <PromotionItem key={promotion.id} promotion={promotion} />
        ))}
      </ul>
    </section>
  );
}