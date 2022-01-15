import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../app.css';

const Product = ({ Image }) => {
    return (
        <Card className='product gap-2'>
            <Card.Img
                variant='top'
                style={{ width: '100%', height: '250px' }}
                src={Image}
                className='product-img'
            />
            <Card.Body>
                <Card.Title>CASIO: GM2100-1A</Card.Title>
                <Card.Text>49$</Card.Text>
                <Button variant='primary'>Go Buy</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;
