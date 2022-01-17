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
                <Link to='/contacts'>Contacts</Link>
            </div>
            <div className='nav-cart'>
                <Link to='/carts'>
                    <span className='fa fa-shopping-cart'> 0 </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
