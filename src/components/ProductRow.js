import React from 'react';

const ProductRow = (props) => {
  const productList = props.filteredProducts.map((items) => {
    return (
      <tbody>
        <tr>
        <td style={{ color: items.inStock ? 'black' : 'red' }}>
        {items.name}</td>
      <td>{items.price}</td>
        </tr>
      </tbody>
    );
  });
  return productList;
};

export default ProductRow;
