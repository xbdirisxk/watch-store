import React, { useState } from 'react';

const Carts = () => {
    const [carts, setCarts] = useState([]);
    return (
        <>
            <h2>Carts</h2>
            <div className='list-carts'>there is no items</div>
        </>
    );
};

export default Carts;
