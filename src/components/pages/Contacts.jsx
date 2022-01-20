import React from 'react';

const Contacts = () => {
    return (
        <div>
            <h3>We are located in</h3>
            <span className='fa fa-map-marked-alt'>
                {' '}
                3rd floor, hashi building, togdheer road,Hargeisa
            </span>

            <h3>Contact us</h3>
            <div className='contacts'>
                <span className='fa fa-phone-square-alt'> +252 61 8810101</span>
                <span className='fa fa-envelope'> wstore@gmail.com</span>
            </div>

            <h3>Social Media</h3>
            <div className='social-media'>
                <a
                    href='https://github.com/xbdirisxk'
                    className='fa fa-github'
                ></a>
                <a
                    href='https://twitter.com/abdirisakhd'
                    className='fa fa-twitter'
                ></a>
            </div>
        </div>
    );
};

export default Contacts;
