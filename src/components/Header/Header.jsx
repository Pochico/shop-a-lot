import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';

import { useMyCart } from '../../context/CartContext';
import '../../context/LoginContext';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/LoginContext';
import { useMyCategoriesContext } from '../../context/CategoriesContext';

export default function Header() {
    const { cartItems, setCartOpen } = useMyCart();
    const { userState } = useLoginContext();

    const { setCategoriesOpen } = useMyCategoriesContext();

    return (
        <header>
            <nav className="menu">
                <button
                    className="menu__button"
                    onClick={() => setCategoriesOpen(true)}
                >
                    <MenuIcon fontSize="large" />
                </button>
                <Link to="shop-a-lot/">
                    <h1>Shopalo todo</h1>
                </Link>
                <div className="menu__button-row">
                    <Link to="shop-a-lot/login">
                        <span className="user-name" id="user-name">
                            {userState.username}
                        </span>
                        <button className="menu__button">
                            <PersonIcon fontSize="large" />
                        </button>
                    </Link>
                    <button
                        className="menu__button"
                        onClick={() => setCartOpen(true)}
                    >
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
