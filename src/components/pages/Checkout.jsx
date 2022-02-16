import React from 'react';
import { Button, Offcanvas, Image } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import imageUrl from '../../images/11-fossil-watch.jpg';

const Checkout = ({ show, setShow, Item }) => {
    const handleClose = () => setShow(false);
    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{Item.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image
                    fluid
                    thumbnail
                    src={Item.imgUrl}
                    alt='product pic'
                    style={{ width: '70%', height: '50%' }}
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt hic, voluptas praesentium aperiam ducimus maxime
                    placeat atque nostrum nobis blanditiis consectetur dolore
                    dignissimos eveniet quam earum, ad quis soluta maiores.
                </p>
                <Button variant='warning'>Add to cart</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

Checkout.propTypes = {
    // rules
    // name: PropTypes.string,
};

export default Checkout;
