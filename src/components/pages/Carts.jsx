import React from 'react';
import Table from 'react-bootstrap/Table';
import '../../app.css';

const Carts = ({ carts, incrementQuantity, decrementQuantity }) => {
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

                                        <span
                                            className='fa fa-minus quantity-btns'
                                            onClick={() =>
                                                decrementQuantity(cart.id)
                                            }
                                        ></span>
                                        <span
                                            className='fa fa-plus quantity-btns'
                                            onClick={() =>
                                                incrementQuantity(cart.id)
                                            }
                                        ></span>
                                    </div>
                                </td>
                                <td>{cart.price * cart.quantity}$</td>
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
