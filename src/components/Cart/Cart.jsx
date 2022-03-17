import React from 'react';
import { useMyCart } from '../../context/CartContext';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Cart() {
    const { cartItems, setCartItems, cartOpen, setCartOpen, setTotalPrice } =
        useMyCart();

    const cartStyle = {
        right: cartOpen ? '0%' : '-100%',
        padding: cartOpen ? '0 5%' : '0 0',
    };

    const deleteItemFromCart = (id) => {
        let deletableItem = cartItems.find((item) => item.id === id);

        let position = cartItems.indexOf(deletableItem);
        cartItems.splice(position, 1);
        setCartItems([...cartItems]);
    };

    const addCount = (item, operate) => {
        if (operate === 'add') item.count++;
        if (operate === 'sub' && item.count !== 0) item.count--;

        setCartItems([...cartItems]);
    };

    return (
        <div className="cart-list" style={cartStyle}>
            <div className="cart-header">
                <h3>My Cart</h3>
                <button
                    className="close-button"
                    onClick={() => setCartOpen(false)}
                >
                    <CloseIcon fontSize="large" />
                </button>
            </div>

            <div className="cart-list__item-list">
                {cartItems.map((item, index) => {
                    return (
                        <div
                            className="item-list__item"
                            key={index}
                            id={item.id}
                        >
                            <img
                                className="item-list__item-image"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="item-info">
                                <h4>{item.title}</h4>
                                <div className="price-amount-set">
                                    <p>
                                        <button
                                            className="amount-button"
                                            onClick={() =>
                                                addCount(item, 'sub')
                                            }
                                        >
                                            -
                                        </button>
                                        <span className="item-amount">
                                            {item.count}
                                        </span>
                                        <button
                                            className="amount-button"
                                            onClick={() =>
                                                addCount(item, 'add')
                                            }
                                        >
                                            +
                                        </button>
                                    </p>
                                    <p className="price-set">
                                        ${item.price * item.count}&nbsp; -
                                        &nbsp;
                                        <span className="small-price">
                                            ($
                                            {item.price} each)
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <button
                                className="delete-button"
                                onClick={() => deleteItemFromCart(item.id)}
                            >
                                <DeleteForeverIcon fontSize="large" />
                            </button>
                        </div>
                    );
                })}
            </div>
            <h3>
                Total Price: $
                {cartItems.reduce(function (a, b) {
                    return Math.round(a * 100) / 100 + b['count'] * b['price'];
                }, 0)}
            </h3>
            <button className="payment-button">Go to payment</button>
        </div>
    );
}
