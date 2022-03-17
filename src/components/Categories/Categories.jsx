import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useMyCategoriesContext } from '../../context/CategoriesContext';

export default function Categories() {
    const { setCategoriesOpen, categoriesOpen } = useMyCategoriesContext();

    const categoriesStyle = {
        left: categoriesOpen ? '0%' : '-100%',
    };

    return (
        <div className="categories-list" style={categoriesStyle}>
            <div className="categories-header">
                <h3>Categories</h3>
                <button
                    className="close-button"
                    onClick={() => setCategoriesOpen(false)}
                >
                    <CloseIcon fontSize="large" />
                </button>
            </div>
            <ul>
                <Link to={'/'}>
                    <li>All Categories</li>
                </Link>
                <Link to={'/category/jewelery'}>
                    <li>Jewelery</li>
                </Link>
                <Link to={'/category/electronics'}>
                    <li>Electronics</li>
                </Link>
                <Link to={"/category/men's clothing"}>
                    <li>Men's clothing</li>
                </Link>
                <Link to={"/category/women's clothing"}>
                    <li>Women's clothing</li>
                </Link>
            </ul>
        </div>
    );
}
