import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';
import Product from '../Product';

const Home = ({ products }) => {
    const RandomProducts = products.sort(() => Math.random() - 0.5).slice(0, 3);
    return (
        <main className='header'>
            <div className='header-bg'>
                <Link to='/products'>Shop now</Link>
            </div>
            <h3>Products Overview</h3>
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
            <h4>
                <Link to='products' style={{ color: '#000' }}>
                    Show More
                </Link>
            </h4>
        </main>
    );
};

export default Home;
