import React from 'react';
import { useMyCart } from '../../context/CartContext';
import CloseIcon from '@mui/icons-material/Close';

export default function Cart() {
    const { cartItems, cartOpen, setCartOpen } = useMyCart();

    const cartStyle = {
        width: cartOpen ? '100%' : '0%',
        padding: cartOpen ? '2% 5%' : '0 0',
    };

    const cartItemOpacity = {
        opacity: cartOpen ? '1' : '0',
        transitionDelay: '0.15s',
    };

    return (
        <div className="cart-list" style={cartStyle}>
            <div className="cart-header">
                <h3 className="cart-list__title">My Cart</h3>
                <button onClick={() => setCartOpen(false)}>
                    <CloseIcon fontSize="large" />
                </button>
            </div>

            <div className="cart-list__item-list">
                {cartItems.map((item, index) => {
                    return (
                        <div className="item-list__item" key={index}>
                            <img
                                className="item-list__item-image"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="item-info">
                                <h4>{item.title}</h4>
                                <p>
                                    <button className="amount-button">-</button>
                                    <span className="item-amount">
                                        {item.count}
                                    </span>
                                    <button className="amount-button">+</button>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
