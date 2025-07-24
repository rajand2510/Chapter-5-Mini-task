import React from 'react';
import { useCart } from './CartContext';

export default function Cart() {
  const { state } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Cart</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.cart.map(item => (
            <li key={item.id}>
              {item.name} — Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
