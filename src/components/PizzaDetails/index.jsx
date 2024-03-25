import { useContext, useState } from "react";
import { ModalContext } from "@/context/ModalContext";

import { Modal } from "../Modal";
import { Title } from "@/components/Title";
import { PizzaSizeOption } from "./PizzaSizeOption";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { OrderContext } from "@/context/OrderContext";
import { formatPrice } from "@/utils/formatPrice";

export const PizzaDetails = () => {
  const {closeModal, selectedPizza} = useContext(ModalContext);
  const { addItemToShoppingBag } = useContext(OrderContext);
  const [ quantity, setQuantity ] = useState(1);
  const [ selectedSize, setSelectedSize ] = useState('individual');
    
  const sizes = Object.entries(selectedPizza.sizes);
  const subtotal = (selectedPizza.sizes[selectedSize].price) * quantity;

  const handleAddButton = () => {
    addItemToShoppingBag(selectedPizza, quantity, selectedSize);
    closeModal();
  };
  const handleSizeChange = size => setSelectedSize(size);
  const handleIncrease = () => setQuantity(quantity +1);
  const handleDecrease = () => {
    if(quantity > 1) {
      setQuantity(quantity -1)
    }
  }

  return (
    <Modal>
      <div className="flex flex-col gap-4 sm:gap-7 lg:gap-12 lg:px-7">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
          <img src="/test-img.png" alt="teste" className="rounded-full w-[100px] sm:w-[160px] lg:w-[200px]" />
          <div className="flex flex-col items-center gap-2 sm:gap-4 sm:items-start">
            <Title type="dark">{selectedPizza.pizza}</Title>
            <p className="text-sm sm:text-base text-brown-100">{selectedPizza.ingredients}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-7 lg:gap-12">
          <div className="flex flex-col sm:flex-row gap-2 items-center sm:justify-center py-2 sm:py-4 px-4 bg-white rounded-2xl">
            { sizes.map(([size, {price}]) => (
              <PizzaSizeOption 
                key={size}  
                value={size} 
                price={price} 
                selected={size === selectedSize}
                onClick={() => handleSizeChange(size)}
              />
            ))
            }
          </div>
          <div className="flex items-start justify-between text-gray-850">
            <div className="flex items-center gap-2  sm:gap-4">
              <MinusCircle onClick={handleDecrease} className="hover:cursor-pointer text-3xl sm:text-4xl" />
              <span className="ms:text-lg">{quantity}</span>
              <PlusCircle onClick={handleIncrease} className="hover:cursor-pointer text-3xl sm:text-4xl" />
            </div>
            <div className="flex flex-col gap-2 items-center sm:flex-row sm:gap-4">
              <div className="flex items-center gap-2 sm:flex-col">
                <span className="font-light text-xs sm:text-sm">Subtotal</span>
                <span className="font-medium text-sm sm:text-base">R${formatPrice(subtotal)}</span>
              </div>
              <button className="primary-button" onClick={handleAddButton}>Adicionar</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};