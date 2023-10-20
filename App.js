import React, { useState } from 'react';
import './App.css';
import SizeSelector from './SizeSelector';
import Menu from './Menu';
import Cart from './Cart';

function App() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, name: 'Item 1', price: 20 },
    { id: 2, name: 'Item 2', price: 25 },
    // Add more items here
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div className="App">
      <h1>Clothing Website</h1>
      <SizeSelector selectedSize={selectedSize} onSelectSize={setSelectedSize} />
      <Menu items={items} onAddToCart={addToCart} />
      <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
}

export default App;
