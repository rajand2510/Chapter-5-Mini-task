import React from 'react';
import { useCart } from './CartContext';

export default function ProductList() {
  const { state, dispatch } = useCart();

  const handleAddToCart = (id) => {
    dispatch({ type: 'ADD_TO_CART', payload: { productId: id } });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      <ul>
        {state.products.map(product => (
          <li key={product.id} className="mb-2">
            {product.name} — Stock: {product.stock}
            <button
              className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
              disabled={product.stock <= 0}
              onClick={() => handleAddToCart(product.id)}
            >
              {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
