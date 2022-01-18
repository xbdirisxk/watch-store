import React from 'react';
import '../../app.css';
import Product from '../Product';

import Blancpain from '../../images/1-Blancpain.jpg';
import Harry from '../../images/2-Harry-Winston.jpg';
import Frederique from '../../images/3-Frédérique-Constant.jpg';

const Home = () => {
    const productImages = [Blancpain, Harry, Frederique];
    let num = 0;
    return (
        <main className='header'>
            <div className='header-bg'>
                <button>Shop now</button>
            </div>
            <div className='products-overview gap-2'>
                {productImages.map((productImg) => (
                    <Product
                        key={num++}
                        imgUrl={productImg}
                        title={'wrist watch'}
                        price={'59$'}
                    />
                ))}
            </div>
        </main>
    );
};

export default Home;
