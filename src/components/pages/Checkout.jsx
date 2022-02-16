import React from 'react';
import { Button, Offcanvas, Image } from 'react-bootstrap';

const Checkout = ({ show, setShow, Item, addToCarts }) => {
    const handleClose = () => setShow(false);
    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            placement={'end'}
            style={{ width: '50%' }}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{Item.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image
                    thumbnail
                    src={Item.imgUrl}
                    alt='product pic'
                    style={{ maxWidth: '70%', maxHeight: '50%' }}
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt hic, voluptas praesentium aperiam ducimus maxime
                    placeat atque nostrum nobis blanditiis consectetur dolore
                    dignissimos eveniet quam earum, ad quis soluta maiores.
                </p>
                <Button variant='warning' onClick={() => addToCarts(Item.id)}>
                    Add to cart
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Checkout;
