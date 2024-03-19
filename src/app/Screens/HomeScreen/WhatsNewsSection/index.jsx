'use client';
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";
import { Title } from "@/components/Title";
import { NewsItem } from "./NewsItem";
import { PizzaDetails } from "@/components/PizzaDetails";

export const WhatsNewsSection = () => {
  const {openModal} = useContext(ModalContext);
  return (
    <section className="flex flex-col gap-5 lg:gap-6">
      <Title type="dark">Novidades Na Área</Title>
      
      <ul className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap"> 
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </ul>

      { openModal && <PizzaDetails />}
    </section>
  );
}