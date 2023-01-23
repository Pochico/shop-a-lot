import Header from './components/Header/Header';
import CartContext from './context/CartContext';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/main.scss';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Login from './pages/Login/Login';
import Cart from './components/Cart/Cart';
import LoginContext from './context/LoginContext';
import CategoriesContext from './context/CategoriesContext';
import Categories from './components/Categories/Categories';
import ProductsByCategory from './pages/ProductsByCategory/ProductsByCategory';

function App() {
    return (
        <div className="App">
            <LoginContext>
                <CartContext>
                    <CategoriesContext>
                        <Router>
                            <Header />
                            <Cart />
                            <Categories />
                            <Routes>
                                <Route path="shop-a-lot/" element={<Home />} />
                                <Route
                                    path="shop-a-lot/category/:categoryName"
                                    element={<ProductsByCategory />}
                                />
                                <Route
                                    path="shop-a-lot/SingleProduct/:productId"
                                    element={<SingleProduct />}
                                />
                                <Route path="shop-a-lot/login" element={<Login />} />
                            </Routes>
                        </Router>
                    </CategoriesContext>
                </CartContext>
            </LoginContext>
        </div>
    );
}

export default App;
