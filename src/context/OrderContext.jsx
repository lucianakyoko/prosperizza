'use client';
import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addItemToShoppingBag = (pizza, quantity, size) => {
    const itemId = `${pizza.id}-${size}`;
    const existingItem = orderItems.find(item => item.id === itemId);

    if(existingItem) {
      setOrderItems(orderItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      }));
    } else {
      setOrderItems([...orderItems, {id: itemId, pizza, quantity, size}]);
    }
  };

  const removeItemFromShoppingBag = pizzaId => {
    setOrderItems(orderItems.filter(item => item.pizza.id !== pizzaId));
  };

  const increasePizzaQuantity = pizzaId => {
    setOrderItems(orderItems.map(item => {
      if(item.pizza.id === pizzaId) {
        return { ...item, quantity: item.quantity + 1};
      }
      return item;
    }))
  };

  const decreaseItemQuantity = pizzaId => {
    setOrderItems(orderItems.map(item => {
      if(item.pizza.id === pizzaId && item.quantity > 1) {
        return {...item, quantity: item.quantity -1};
      };
      return item;
    }))
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    orderItems.forEach(item => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    orderItems.forEach(item => {
      const { price } = item.pizza.sizes[item.size];
      totalPrice += price * item.quantity;
    });
    return totalPrice;
  };

  const values = {
    orderItems,
    addItemToShoppingBag,
    removeItemFromShoppingBag,
    increasePizzaQuantity,
    decreaseItemQuantity,
    calculateTotalQuantity,
    calculateTotalPrice
  };

  return (
    <OrderContext.Provider value={values}>
      { children }
    </OrderContext.Provider>
  );
}