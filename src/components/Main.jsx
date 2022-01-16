import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './/Nav';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Carts from './pages/Carts';
import Blancpain from '../images/1-Blancpain.jpg';
import Harry from '../images/2-Harry-Winston.jpg';
import Frederique from '../images/3-Frédérique-Constant.jpg';
import TagHeuer from '../images/4-Tag-Heuer.jpg';
import Vacheron from '../images/5-Vacheron-Constantin.jpg';
import Audemars from '../images/6-Audemars-Piguet.jpg';
import Rolex from '../images/7-Rolex-Datejust.jpg';
import smartWatch from '../images/8-techy-watch.jpg';
import Zenith from '../images/9-Zenith.jpg';
import Meister from '../images/10-MeisterSinger.jpg';
import Fossil from '../images/11-fossil-watch.jpg';
import wirstWatch from '../images/12-wirst-watch.jpg';

const Main = () => {
    const [products] = useState([
        {
            id: 1,
            title: 'Blancpain-Brand F23',
            price: 56,
            imgUrl: Blancpain,
        },
        { id: 2, title: 'Harry Winston', price: 86, imgUrl: Harry },
        {
            id: 3,
            title: 'Frédérique-Constant',
            price: 69,
            imgUrl: Frederique,
        },
        { id: 4, title: 'Tag-Heuer', price: 56, imgUrl: TagHeuer },
        { id: 5, title: 'Vacheron Constantin', price: 49, imgUrl: Vacheron },
        { id: 6, title: 'Audemars Piguet', price: 33, imgUrl: Audemars },

        { id: 7, title: 'Rolex Datejust', price: 129, imgUrl: Rolex },
        { id: 8, title: 'Smart-Watch', price: 29, imgUrl: smartWatch },
        { id: 9, title: 'Zenith', price: 45, imgUrl: Zenith },
        { id: 10, title: 'Meister-Singer', price: 259, imgUrl: Meister },
        { id: 11, title: 'Fossil', price: 1996, imgUrl: Fossil },
        { id: 12, title: 'wirst watch', price: 77, imgUrl: wirstWatch },
    ]);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route
                    path='/products'
                    element={<Products products={products} />}
                ></Route>
                <Route path='/contacts' element={<Contacts />}></Route>
                <Route path='/carts' element={<Carts />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Main;
