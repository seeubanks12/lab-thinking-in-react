import React from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

//This component has a state variable holding the array of products (jsonData).
//It will pass down the products to other components that need them.
const ProductsPage = () => {
  const [products, setProducts] = React.useState(jsonData);
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
      />

      <ProductTable
        products={products}
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
      />
    </div>
  );
};

export default ProductsPage;
