import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
// import PropTypes from 'prop-types';
//import imageUrl from '../../images/11-fossil-watch.jpg';

const Checkout = ({ show, handleShow, handleClose }) => {
    return (
        <>
            {/* <Button variant='primary'>Launch</Button> */}

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

Checkout.propTypes = {
    // rules
    // name: PropTypes.string,
};

export default Checkout;
