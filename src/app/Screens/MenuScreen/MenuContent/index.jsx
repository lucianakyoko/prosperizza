'use client';

import { useState } from "react";
import { FilterItem } from "../FilterItem";
import { MenuList } from "../MenuList";
import { categories } from "../categories-list";

export const MenuContent = ({ pizzas }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const handleCategorySelect = (category) => setSelectedCategory(category);

  return (
    <>
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
    </>
  );
}