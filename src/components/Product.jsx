import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Product = ({
    productId,
    title,
    imgUrl,
    price,
    handleAddToCarts,
    onClickShow,
}) => {
    return (
        <Card className='product gap-2'>
            <Card.Img
                variant='top'
                style={{ width: '100%', height: '250px' }}
                src={imgUrl}
                className='product-img'
                onClick={() => onClickShow(productId)}
            />

            <Card.Body>
                <Card.Title
                    className='product-name'
                    onClick={() => onClickShow(productId)}
                >
                    {title}
                </Card.Title>

                <Card.Text className='product-price'>{price}$</Card.Text>
                {handleAddToCarts && (
                    <Button
                        variant='warning'
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
