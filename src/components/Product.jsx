import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Product = ({ productId, title, imgUrl, price, handleAddToCarts }) => {
    const navigate = useNavigate();
    return (
        <Card className='product gap-2'>
            <Card.Img
                variant='top'
                style={{ width: '100%', height: '250px' }}
                src={imgUrl}
                className='product-img'
                onClick={() => navigate('checkout1')}
            />

            <Card.Body>
                <Card.Title
                    className='product-name'
                    onClick={() => navigate('checkout1')}
                >
                    {title}
                </Card.Title>

                <Card.Text className='product-price'>{price}$</Card.Text>
                {handleAddToCarts && (
                    <Button
                        variant='primary'
                        onClick={() => handleAddToCarts(productId)}
                    >
                        Add to cart
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};

export default Product;
