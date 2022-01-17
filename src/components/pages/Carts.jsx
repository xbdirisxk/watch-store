import React from 'react';
import Table from 'react-bootstrap/Table';
import '../../app.css';

import Blancpain from '../../images/1-Blancpain.jpg';

const Carts = ({ carts }) => {
    return (
        <div className='main-carts'>
            <h1>Carts</h1>
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
                {carts.map((cart) => (
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src={cart.imgUrl}
                                    alt='table pic'
                                    style={{ width: '120px', height: '100px' }}
                                />
                            </td>
                            <td>{cart.title}</td>
                            <td>{cart.price}</td>
                            <td>no quantity</td>
                            <td>no Subtotal</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
            <h2>Total Price: $$$$</h2>
        </div>
    );
};

export default Carts;

/* <div className='list-carts'>
                {carts.map((cart) => (
                    <Card className='product-in-cart gap-2'>
                        <Card.Img
                            variant='top'
                            style={{ width: '100%', height: '150px' }}
                            src={cart.imgUrl}
                            className='product-img'
                        />
                        <Card.Body>
                            <Card.Title>{cart.title}</Card.Title>
                            <Card.Text>{cart.price}$</Card.Text>
                            <Button variant='primary'>Add to cart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div> */
