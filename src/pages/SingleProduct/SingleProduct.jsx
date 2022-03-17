import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useMyCart } from '../../context/CartContext';

export default function SingleProduct() {
    const [singleProductInfo, setSingleProductInfo] = useState({
        id: '',
        title: '',
        description: '',
        image: '',
        price: '',
        rating: '',
    });
    const { cartItems, setCartItems } = useMyCart();

    const addItemToCart = (id) => {
        const found = cartItems.find((cartItem) => cartItem.id === id);

        if (!found) {
            const cartItem = {
                ...singleProductInfo,
                count: 1,
            };
            setCartItems([...cartItems, cartItem]);
        } else {
            found.count++;
            setCartItems([...cartItems]);
        }
    };

    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((data) => data.json())
            .then((data) => setSingleProductInfo(data));
        // .then((data) => console.table(data));
    }, []);

    const { id, title, description, image, price, rating } = singleProductInfo;

    return (
        <div className="single-prod-container">
            <div className="single-prod-container__left-column">
                <img src={image} alt={title} />
            </div>
            <div className="single-prod-container__right-column">
                <h3>{title}</h3>
                <p className="product-rating">
                    <StarHalfIcon sx={{ color: 'goldenrod' }} /> {rating.rate} /
                    5
                </p>
                <p>{description}</p>
                <p className="price-tag">${price}</p>

                <button
                    className="add-to-cart-button"
                    onClick={() => addItemToCart(id)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
