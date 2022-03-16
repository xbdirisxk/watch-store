import React from 'react';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiOutlineMail,
    AiTwotonePhone,
} from 'react-icons/ai';
import { BiMapPin } from 'react-icons/bi';
import storeImg from '../../assets/images/w_store.jpg';

const Contacts = () => {
    return (
        <div className='contacts-container'>
            <div className='store-img'>
                <img src={storeImg} alt='front store' />
            </div>
            <div className='store-info'>
                <h3>We are located in</h3>
                <span>
                    <BiMapPin /> 3rd floor, hashi building, togdheer
                    road,Hargeisa
                </span>

                <h3>Contact us</h3>
                <div className='contacts'>
                    <span>
                        <AiTwotonePhone /> +252 61 8810101
                    </span>
                    <span>
                        <AiOutlineMail /> wstore@gmail.com
                    </span>
                </div>

                <h3>Social Media</h3>
                <div className='social-media'>
                    <a href='https://github.com/xbdirisxk'>
                        <AiFillGithub />
                    </a>
                    <a href='https://twitter.com/abdirisakhd'>
                        <AiOutlineTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
