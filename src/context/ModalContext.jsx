'use client';
import  { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState('');

  const openModal = pizza => {
    setIsOpen(true);
    setSelectedPizza(pizza);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPizza(null);
  };

  const values = {
    isOpen,
    openModal,
    closeModal,
    selectedPizza,
    setSelectedPizza
  }
  return (
    <ModalContext.Provider value={values}>
      {children}
    </ModalContext.Provider>
  );
};

