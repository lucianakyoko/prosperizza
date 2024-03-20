'use client';
import  { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{isOpen, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  );
};

// export const useModal = () => {
//   return useContext(ModalContext);
// }
