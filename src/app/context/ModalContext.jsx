'use client';
import  { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => setOpenModal(!openModal);

  return (
    <ModalContext.Provider value={{openModal, handleModal}}>
      {children}
    </ModalContext.Provider>
  );
};

