import React from 'react';
import Product from '../Product';

const Products = ({ products }) => {
    return (
        <div className='products'>
            {products.map((product) => (
                <Product
                    key={product.id}
                    title={product.title}
                    imgUrl={product.imgUrl}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default Products;
