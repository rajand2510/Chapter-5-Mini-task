import React, { createContext, useReducer, useContext, useMemo } from 'react';

const CartContext = createContext();

const initialState = {
  products: [
    { id: 1, name: 'Laptop', stock: 5 },
    { id: 2, name: 'Phone', stock: 8 },
    { id: 3, name: 'Headphones', stock: 10 },
  ],
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { productId } = action.payload;
      const product = state.products.find(p => p.id === productId);
      if (!product || product.stock <= 0) return state;

      const updatedProducts = state.products.map(p =>
        p.id === productId ? { ...p, stock: p.stock - 1 } : p
      );

      const existingCartItem = state.cart.find(item => item.id === productId);
      let updatedCart;
      if (existingCartItem) {
        updatedCart = state.cart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { id: product.id, name: product.name, quantity: 1 }];
      }

      return { ...state, products: updatedProducts, cart: updatedCart };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Memoize the value object passed to the Provider
  // This ensures the value object reference only changes when 'state' or 'dispatch' change
  const memoizedValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
