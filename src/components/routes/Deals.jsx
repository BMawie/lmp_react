import React from 'react';
import ProductList from '../ProductList';
import Products from '../Products';

const Deals = ({ website }) => {

    return (
        <div>
            <ProductList />
            <Products hideSourceOnDrag={true} />
        </div>
    );
}
    
export default Deals;