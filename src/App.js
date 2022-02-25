import React from 'react';
import './App.css';
import ProductsPage from './components/ProductsPage';
import jsonData from './data.json';

function App() {
  // const [products, setProducts] = React.useState(jsonData);

  return (
    <div className="App">
      {/* render the ProductsPage component: */}
      <ProductsPage />
      
    </div>
  );
}

export default App;
