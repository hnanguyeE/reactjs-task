import React from 'react';

const Menu = ({ items, onAddToCart }) => {
  return ( 
    <div>
      <h2>Menu:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;