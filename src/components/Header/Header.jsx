import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/manageHistory">Manage History</a>
                <a href="/logIn">LogIn</a>
            </div>
        </nav>
    );
};

export default Header;