import React from 'react';
import '../app.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2 className='logo'>Watch Store</h2>
            <div className='pages'>
                <span>Home</span>
                <span>Products</span>
                <span>Contacts</span>
            </div>
        </nav>
    );
};

export default Navbar;
