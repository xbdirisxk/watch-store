import React from 'react';
import '../app.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2 className='logo'>Watch shop</h2>
            <div className='items'>
                <span>Home</span>
                <span>Products</span>
                <span>About</span>
            </div>
        </nav>
    );
};

export default Navbar;
