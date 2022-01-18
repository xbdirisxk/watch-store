import React from 'react';
import '../../app.css';
import Product from '../Product';

const Home = ({ products }) => {
    const RandomProducts = products.sort(() => Math.random() - 0.5).slice(0, 3);
    return (
        <main className='header'>
            <div className='header-bg'>
                <button>Shop now</button>
            </div>
            <div className='products-overview gap-2'>
                {RandomProducts.map((product) => (
                    <Product
                        key={product.id}
                        imgUrl={product.imgUrl}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </main>
    );
};

export default Home;
