import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../app.css';

const Product = ({ title, imgUrl, price }) => {
    return (
        <Card className='product gap-2'>
            <Card.Img
                variant='top'
                style={{ width: '100%', height: '250px' }}
                src={imgUrl}
                className='product-img'
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Button variant='primary'>Go Buy</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;
