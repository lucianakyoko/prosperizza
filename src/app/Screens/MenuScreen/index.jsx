'use client';
import { useState } from "react";
import { ModalProvider } from "@/context/ModalContext";

import { Title } from "@/components/Title";
import { FilterItem } from "./FilterItem";
import { MenuList } from "./MenuList";
import { categories } from "./categories-list";
import { pizzas } from "@/pizzas";

export const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const handleCategorySelect = (category) => setSelectedCategory(category);


  return (
    <main className="layout-container mt-7 sm:mt-9 lg:mt-12">
      <Title type="dark">Cardápio</Title>

      <ModalProvider>
        <ul className="flex gap-3 flex-wrap pt-5 lg:pt-6">
          {categories.map(category => (
            <FilterItem 
              key={category.label}
              tagName={category.label} 
              onClick={() => handleCategorySelect(category.label)}
              isActive={category.label === selectedCategory}
            />
          ))}
        </ul>

        <MenuList 
          pizzas={pizzas.filter(pizza => selectedCategory === 'Todos' || pizza.category === selectedCategory)}
        />
      </ModalProvider>
    </main>
  );
}