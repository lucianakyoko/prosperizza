'use client';
import { v4 as uuidv4  } from "uuid";
import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  

  const addItemToShoppingBag = (pizza, quantity, size) => {
    const itemId = pizza._id;
    const orderItemId = uuidv4();
    const pizzaName = pizza.pizzaName;
    const sizeId = pizza.sizes[size].size_id;
    const sizeName = size;
    const ingredients = pizza.ingredients
    const pizzaImage = pizza.imageUrl
    const pizzaPrice = pizza.sizes[size].price
    const pizzaQuantity = quantity
    const existingItem = orderItems.find(item => item.size_id === sizeId);
 
    if(existingItem) {
      setOrderItems(orderItems.map(item => {
        if (item.size_id === sizeId) {
          return { 
            ...item, 
            pizzaQuantity: item.pizzaQuantity + pizzaQuantity
          };
        }
        return item;
      }));
    } else {
      setOrderItems(
        [...orderItems, {
          size_id: sizeId,
          orderItemId,
          pizzaName: pizzaName, 
          ingredients: ingredients,
          imageUrl: pizzaImage,
          price: pizzaPrice,
          pizzaQuantity: pizzaQuantity,
          sizeName: sizeName
        }]);
    }
  };

  const removeItemFromShoppingBag = idToRemove  => {
    setOrderItems(orderItems.filter(item => item.size_id !== idToRemove ));
  };

  const increasePizzaQuantity = id => {
    setOrderItems(orderItems.map(item => {
      if(item.orderItemId === id) {
        return { ...item, pizzaQuantity: item.pizzaQuantity + 1};
      }
      return item;
    }))
  };

  const decreaseItemQuantity = id => {
    setOrderItems(orderItems.map(item => {
      if(item.orderItemId === id && item.pizzaQuantity > 1) {
        return {...item, pizzaQuantity: item.pizzaQuantity -1};
      };
      return item;
    }))
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    orderItems.forEach(item => {
      totalQuantity += item.pizzaQuantity;
    });
    return totalQuantity;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    orderItems.forEach(item => {
      const price = item.price;
      totalPrice += price * item.pizzaQuantity;
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