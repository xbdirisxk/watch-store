import React from 'react';
import { Button, Offcanvas, Image } from 'react-bootstrap';

const OffCanvas = ({ show, setShow, Item, addToCarts, setSelectedImg }) => {
    const handleClose = () => setShow(false);
    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            placement={'end'}
            className='off-canvas'
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ fontSize: 27 }}>
                    {Item.title}
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image
                    thumbnail
                    src={Item.imgUrl}
                    alt='product pic'
                    className='image'
                    onClick={() => setSelectedImg(Item.imgUrl)}
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt hic, voluptas praesentium aperiam ducimus maxime
                    placeat atque nostrum nobis blanditiis consectetur dolore
                    dignissimos eveniet quam earum, ad quis soluta maiores.
                </p>

                <div className='item-price'>Price: {Item.price}$</div>
                <div className='btns'>
                    <Button variant='primary '>Buy it Now</Button>
                    <Button
                        variant='warning'
                        onClick={() => addToCarts(Item.id)}
                    >
                        Add to cart
                    </Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffCanvas;
