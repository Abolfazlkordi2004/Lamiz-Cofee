import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  img: string;
  header: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  cartCount: number;
  cartItems: Product[];
  addToCart: (product?: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = (product?: Product) => {
    if (product) {
      setCartItems((prev) => [...prev, product]);
      setCartCount((prev) => prev + product.quantity);
    } else {
      setCartCount((prev) => prev + 1);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
