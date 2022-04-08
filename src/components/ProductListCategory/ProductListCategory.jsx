import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMyCart } from '../../context/CartContext';
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ProductListCategory() {
    const { cartItems, setCartItems } = useMyCart();

    const [products, setProducts] = useState([]);

    const addItemToCart = (item) => {
        const found = cartItems.find((cartItem) => cartItem.id === item.id);

        if (!found) {
            const cartItem = {
                ...item,
                count: 1,
            };
            setCartItems([...cartItems, cartItem]);
        } else {
            found.count++;
            setCartItems([...cartItems]);
        }
    };

    const { categoryName } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((data) => data.json())
            .then((data) => setProducts(data));
    }, [categoryName]);

    return (
        <div className="product-list">
            {products.map((item, index) => {
                return (
                    <div className="product-list__item" key={item.id}>
                        <div className="product-list__item__top">
                            <img src={item.image} alt={item.name} />

                            <div className="product-list__item__top__button-row">
                                <Link to={`/SingleProduct/${item.id}`}>
                                    <button>
                                        <VisibilityIcon />
                                    </button>
                                </Link>
                                <button
                                    className="product-list__item__add-to-cart"
                                    onClick={() => addItemToCart(item)}
                                >
                                    <AddShoppingCartIcon />
                                </button>
                            </div>
                        </div>
                        <div className="product-list__item__bottom">
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
