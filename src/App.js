import React, { useState } from 'react';
import Main from './components/Main';
import './app.css';
import Blancpain from './assets/images/1-Blancpain.jpg';
import Harry from './assets/images/2-Harry-Winston.jpg';
import Frederique from './assets/images/3-Frédérique-Constant.jpg';
import TagHeuer from './assets/images/4-Tag-Heuer.jpg';
import Vacheron from './assets/images/5-Vacheron-Constantin.jpg';
import Audemars from './assets/images/6-Audemars-Piguet.jpg';
import Rolex from './assets/images/7-Rolex-Datejust.jpg';
import smartWatch from './assets/images/8-techy-watch.jpg';
import Zenith from './assets/images/9-Zenith.jpg';
import Meister from './assets/images/10-MeisterSinger.jpg';
import Fossil from './assets/images/11-fossil-watch.jpg';
import wirstWatch from './assets/images/12-wirst-watch.jpg';

const App = () => {
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
    const [carts, setCarts] = useState([]);
    return <Main products={products} carts={carts} setCarts={setCarts} />;
};

export default App;
