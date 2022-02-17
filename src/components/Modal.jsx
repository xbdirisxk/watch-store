import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) setSelectedImg(null);
    };

    return (
        <div className='backdrop' onClick={handleClick}>
            <img src={selectedImg} alt='enlarged pic' />
        </div>
    );
};

/* 
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

initial={{ y: '-100vh' }}
animate={{ y: 0 }}
 */
export default Modal;
