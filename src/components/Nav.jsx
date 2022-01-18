import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app.css';

const Navbar = ({ CartLength }) => {
    return (
        <nav className='navbar'>
            <h2 className='logo'>Watch Store</h2>
            <div className='pages'>
                <NavLink
                    to='/'
                    style={({ isActive }) =>
                        isActive ? { color: '#c9c908' } : null
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to='products'
                    style={({ isActive }) =>
                        isActive ? { color: '#c9c908' } : null
                    }
                >
                    Products
                </NavLink>
                <NavLink
                    to='contacts'
                    style={({ isActive }) =>
                        isActive ? { color: '#c9c908' } : null
                    }
                >
                    Contacts
                </NavLink>
            </div>
            <div className='nav-cart'>
                <NavLink
                    to='carts'
                    style={({ isActive }) =>
                        isActive ? { color: '#c9c908' } : null
                    }
                >
                    <span className='fa fa-shopping-cart'> {CartLength} </span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
