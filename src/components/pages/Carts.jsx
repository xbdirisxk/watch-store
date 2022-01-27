import React from 'react';
import Table from 'react-bootstrap/Table';
import { FiDelete } from 'react-icons/fi';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import '../../app.css';

const Carts = ({ carts, incrementQuantity, decrementQuantity, RemoveItem }) => {
    return (
        <div className='main-carts'>
            <h1>Carts</h1>
            {carts.length < 1 ? (
                <p>no item in the carts</p>
            ) : (
                <Table
                    className='list-carts'
                    striped
                    bordered
                    hover
                    responsive='md'
                >
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((cart) => (
                            <tr>
                                <td>
                                    <img
                                        src={cart.imgUrl}
                                        alt='table pic'
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                        }}
                                    />
                                </td>
                                <td>{cart.title}</td>
                                <td>{cart.price}$</td>
                                <td>
                                    <div className='quantity-column'>
                                        <span className='quantity-num'>
                                            {cart.quantity}
                                        </span>

                                        <MdExpandMore
                                            className='quantity-btns'
                                            onClick={() =>
                                                decrementQuantity(cart.id)
                                            }
                                        />
                                        <MdExpandLess
                                            className='quantity-btns'
                                            onClick={() =>
                                                incrementQuantity(cart.id)
                                            }
                                        />
                                    </div>
                                </td>
                                <td>{cart.price * cart.quantity}$</td>
                                <td>
                                    <FiDelete
                                        className='delete-icon'
                                        onClick={() => RemoveItem(cart.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {carts.length > 0 ? (
                <h2>
                    Total Price:{' '}
                    {carts.reduce(
                        (total, cart) => total + cart.price * cart.quantity,
                        0
                    )}
                    $
                </h2>
            ) : null}
        </div>
    );
};

export default Carts;
