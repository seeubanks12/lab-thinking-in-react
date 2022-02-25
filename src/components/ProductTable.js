import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow
          products={props.products}
          setFilteredProducts={props.setFilteredProducts}
          filteredProducts={props.filteredProducts}
        />
      </table>
    </div>
  );
};

export default ProductTable;
