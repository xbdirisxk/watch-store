import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './Nav';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Carts from './pages/Carts';
import OffCanvas from './OffCanvas';
import Modal from './Modal';

const Main = ({ products, carts, setCarts }) => {
    const [showOffcanvas, setShow] = useState(false);
    const [checkItem, setcheckItem] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);

    const handleShow = (id) => {
        const product = products.filter((products) => products.id === id)[0];
        setcheckItem(product);
        setShow(true);
    };

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
        <BrowserRouter>
            <Navbar
                CartsQuantity={carts.reduce(
                    (total, cart) => total + cart.quantity,
                    0
                )}
            />
            {showOffcanvas && (
                <OffCanvas
                    show={showOffcanvas}
                    setShow={setShow}
                    Item={checkItem}
                    addToCarts={addToCarts}
                    setSelectedImg={setSelectedImg}
                />
            )}
            {selectedImg && (
                <Modal
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                />
            )}
            <Routes>
                <Route path='/' element={<Home products={products} />} />
                <Route
                    path='/watch-store'
                    element={<Navigate replace to='/' />}
                />
                <Route
                    path='/products'
                    element={
                        <Products
                            products={products}
                            addToCarts={addToCarts}
                            handleShow={handleShow}
                        />
                    }
                />

                <Route path='/contacts' element={<Contacts />} />
                <Route
                    path='/carts'
                    element={<Carts carts={carts} setCarts={setCarts} />}
                />

                {/* Not Found page */}

                <Route
                    path='*'
                    element={
                        <div style={{ margin: 100 }}>
                            <p style={{ fontSize: 30, maginTop: 30 }}>
                                this path doesn't exist
                            </p>
                            <Link to='/'>
                                <button style={{ border: 1, padding: 10 }}>
                                    Go to Home page
                                </button>
                            </Link>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Main;
