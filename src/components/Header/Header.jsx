import React, { useReducer } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';

import { useMyCart } from '../../context/CartContext';
// import { AuthReducer } from '../../context/LoginContext';
import '../../context/LoginContext';
import { Link } from 'react-router-dom';

const currentUser = localStorage.getItem('currentUser')
    ? localStorage.getItem('currentUser')
    : '';

export default function Header() {
    const { cartItems, setCartOpen } = useMyCart();

    const openCart = () => {
        setCartOpen(true);
    };

    return (
        <header>
            <nav className="menu">
                <button className="menu__button">
                    <MenuIcon fontSize="large" />
                </button>

                <h1>Shopalo todo</h1>

                <div className="menu__button-row">
                    <Link to="/login">
                        <span className="user-name">{currentUser}</span>
                        <button className="menu__button">
                            <PersonIcon fontSize="large" />
                        </button>
                    </Link>
                    <button className="menu__button" onClick={() => openCart()}>
                        <LocalMallIcon fontSize="large" />
                        {cartItems.length > 0 && (
                            <div className="menu__button__notification">
                                {cartItems.reduce(function (a, b) {
                                    return a + b['count'];
                                }, 0)}
                            </div>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}
