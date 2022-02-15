import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Nav';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Carts from './pages/Carts';
import Checkout from './pages/Checkout';

const Main = ({ products, carts, setCarts }) => {
    return (
        <BrowserRouter>
            <Navbar
                CartsQuantity={carts.reduce(
                    (total, cart) => total + cart.quantity,
                    0
                )}
            />
            <Routes>
                <Route path='/' element={<Home products={products} />} />
                <Route
                    path='/watch-store'
                    element={<Home products={products} />}
                />
                <Route
                    path='/products'
                    element={
                        <Products
                            products={products}
                            carts={carts}
                            setCarts={setCarts}
                        />
                    }
                />
                <Route path='products/checkout1' element={<Checkout />} />
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
