import Header from './components/Header/Header';
import CartContext from './context/CartContext';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/main.scss';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Login from './pages/Login/Login';
import Cart from './components/Cart/Cart';
import { LoginProvider } from './context/LoginContext';

function App() {
    return (
        <div className="App">
            <LoginProvider>
                <CartContext>
                    <Router>
                        <Header />
                        <Cart />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="SingleProduct/:productId"
                                element={<SingleProduct />}
                            />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </Router>
                </CartContext>
            </LoginProvider>
        </div>
    );
}

export default App;
