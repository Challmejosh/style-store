
import { PersistStorage } from '@/hooks/localStorage';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(()=>{
    const check = PersistStorage("get","cart")
    if(check){
      setItems(check)
    }
  },[])
  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        const update = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        PersistStorage("set","cart",update)
        return update
      }
      const update = [...prevItems, { ...product, quantity: 1 }];
      PersistStorage("set","cart",update)
      return update;
    });
  };
  
  const removeFromCart = (id: number) => {
    setItems(prevItems => {
      const update = prevItems.filter(item => item.id !== id);
      PersistStorage("set","cart",update)
      return update
    })
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prevItems =>{
      const update = prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
      PersistStorage("set","cart",update)
      return update
    }
    );
  };

  const clearCart = () => {
    setItems([]);
    PersistStorage("delete","cart")
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
