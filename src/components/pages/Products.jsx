import React from 'react';
import Product from '../Product';
import { Outlet } from 'react-router-dom';

const Products = ({ products, carts, setCarts, handleShow }) => {
    const addToCarts = (id) => {
        let item = products.filter((product) => product.id === id)[0];

        const checkItem = (item) =>
            carts
                .map((cart) => (cart.id === item.id ? true : false))
                .includes(true);

        if (checkItem(item)) {
            return setCarts(
                carts.map((cart) =>
                    cart.id === id
                        ? { ...cart, quantity: cart.quantity + 1 }
                        : cart
                )
            );
        } else {
            item = { ...item, quantity: 1 };
            const newCarts = carts.concat(item);
            return setCarts(newCarts);
        }
    };

    return (
        <>
            <Outlet />
            <div className='products'>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        productId={product.id}
                        title={product.title}
                        imgUrl={product.imgUrl}
                        price={product.price}
                        handleAddToCarts={addToCarts}
                        onClickShow={handleShow}
                    />
                ))}
            </div>
        </>
    );
};

export default Products;
