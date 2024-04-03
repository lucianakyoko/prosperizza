'use client'

import { createContext, useState } from "react"

export const BagModalContext = createContext();

export const BagModalProvider = ({children}) => {
  const [currentBagStep, setCurrentBagStep] = useState(1); 

  const values = {
    setCurrentBagStep,
    currentBagStep
  };

  return (
    <BagModalContext.Provider value={values}>
      {children}
    </BagModalContext.Provider>
  );
}