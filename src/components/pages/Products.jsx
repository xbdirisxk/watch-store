import React from 'react';
import Product from '../Product';

const Products = ({ products, handleClick }) => {
    return (
        <div className='products'>
            {products.map((product) => (
                <Product
                    key={product.id}
                    productId={product.id}
                    title={product.title}
                    imgUrl={product.imgUrl}
                    price={product.price}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Products;
