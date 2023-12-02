// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  
    const [cart, setCart] = useState([]);
    const [wish, setWish] = useState([])

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
      };
     const addTowish = (item) =>{
        setWish((prevWish)=>[...prevWish, item])
     }
     const removeFromCart = (item) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
      };
      const removeFromWish = (item) => {
        setWish((prevWish) => prevWish.filter((cartItem) => cartItem !== item));
      };
  

  return (
    <MyContext.Provider value={{ 
        cart, addToCart,
        wish,setWish,
        addTowish,removeFromCart,removeFromWish
     }}>
      {children}
    </MyContext.Provider>
  );
};
