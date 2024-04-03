'use client'
import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {
  const [userData, setUserData] = useState({});
  const [isUserStepFormValidate, setIsUserStepFormValidate] = useState(false);

  const updateFormData = (data) => {
    setUserData(prevData => ({...prevData, ...data}));
  };

  const values = {
    userData,
    setUserData, 
    updateFormData,
    isUserStepFormValidate, 
    setIsUserStepFormValidate,
  }
 
  return (
    <UserDataContext.Provider value={values}>
      {children}
    </UserDataContext.Provider>
  );
}