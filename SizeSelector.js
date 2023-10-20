import React from 'react';

const SizeSelector = ({ selectedSize, onSelectSize }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div>
      <h2>Select Size:</h2>
      {sizes.map((size) => (
        <button
          key={size}
          className={selectedSize === size ? 'selected' : ''}
          onClick={() => onSelectSize(size)}
        >
          {size}
        </button>
      ))};
    </div>
  );
};

export default SizeSelector;