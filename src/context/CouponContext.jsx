'use client';
import { createContext, useState } from "react";

export const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [couponCode, setCouponCode] = useState('');
  const [couponErrorMessage, setCouponErrorMessage] = useState('');
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [discount, setDiscount] = useState(0);
  const handleCouponChange = event => setCouponCode(event.target.value);

  const handleCouponForm = event => {
    event.preventDefault();
    const currentWeekDay = new Date().getDay();

    if(currentWeekDay===6 && couponCode === 'DEPLOY') {
      setIsCouponValid(true);
      setDiscount(19.9);

    } else if(currentWeekDay!==6 && couponCode === 'DEPLOY') {
      setIsCouponValid(false);
      setCouponErrorMessage('Cupom válido somente às sextas-feiras');

    } else {
      setCouponErrorMessage('Cupom inválido');
    }
  }

  return (
    <CouponContext.Provider 
      value={{
        couponCode,
        setCouponCode,
        isCouponValid,
        handleCouponChange,
        handleCouponForm,
        couponErrorMessage,
        discount
      }}
    >
      { children }
    </CouponContext.Provider>
  )
}