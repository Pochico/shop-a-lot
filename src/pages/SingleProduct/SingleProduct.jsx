import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function SingleProduct() {
    const [singleProductInfo, setSingleProductInfo] = useState({
        id: '',
        title: '',
        description: '',
        image: '',
        price: '',
        rating: '',
    });

    const { productId } = useParams();

    useEffect(() => {
        console.log('use effect3')

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
                <p>{description}</p>
            </div>
            <div className="single-prod-container__right-column">
                <h3>{title}</h3>
                <p>
                    <StarHalfIcon sx={{ color: 'goldenrod' }} /> {rating.rate} /
                    5
                </p>
                <p>${price}</p>
            </div>
        </div>
    );
}
