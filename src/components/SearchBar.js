import React from 'react';
import { Divider, Input } from 'antd';

//Searchbar component has a state holding the props and callback function
const SearchBar = (props) => {
  const [keyword, setKeyword] = React.useState('');
  const [boxChecked, setBoxChecked] = React.useState(false);

  //UseEffect
  React.useEffect(() => {
    let filteredProducts = props.products.filter((props) => {
      return props.name.toLowerCase().includes(keyword.toLowerCase());
    });
    if (boxChecked) {
      //   we use filter because it doesn't mutate the original array
      filteredProducts = filteredProducts.filter((props) => {
        return props.inStock;
      });
    }
    // we have to overwrite what the page is rendering, you'd see all the products
    props.setFilteredProducts(filteredProducts);
    //what the use effect is listening for
  }, [boxChecked, keyword]);

  return (
    <div style={{ width: '30vw', margin: '0 auto' }}>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input
        placeholder="Search"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Input
        type="checkbox"
        onClick={() => setBoxChecked(!boxChecked)}
        value={boxChecked}
      />
      <label>Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
