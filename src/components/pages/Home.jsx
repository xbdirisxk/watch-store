import React from 'react';
import '../../app.css';
import Product from '../Product';
import watch1 from '../../images/watch-1.jpg';
import watch2 from '../../images/watch-2.jpg';
import watch3 from '../../images/watch-3.jpg';

const Home = () => {
    const productImages = [watch1, watch2, watch3];
    return (
        <main className='header'>
            <div className='header-bg'>
                <button>Shop now</button>
            </div>
            <div className='products gap-2'>
                {productImages.map((productImg) => (
                    <Product Image={productImg} />
                ))}
            </div>
        </main>
    );
};

export default Home;
