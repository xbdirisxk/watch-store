import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../app.css';

const Carts = ({ carts }) => {
    return (
        <>
            {/* {console.log(carts[0].imgUrl)} */}
            <h2>Carts</h2>
            <div className='list-carts'>
                {carts.map((cart) => (
                    <Card className='product gap-2'>
                        <Card.Img
                            variant='top'
                            style={{ width: '100%', height: '250px' }}
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
            </div>
        </>
    );
};

export default Carts;
