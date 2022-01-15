import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2 className='logo'>Watch Store</h2>
            <div className='pages'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/contact'>Contacts</Link>
            </div>
        </nav>
    );
};

export default Navbar;
