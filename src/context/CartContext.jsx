import React, { useState, useContext } from 'react';

export const MyCartContext = React.createContext();
export const MyCartOpenContext = React.createContext();
export const MyCartUpdateContext = React.createContext();

export const useMyCart = () => {
    return useContext(MyCartContext);
};

export const useMyCartOpen = () => {
    return useContext(MyCartOpenContext);
};

export const useMyCartUpdate = () => {
    return useContext(MyCartUpdateContext);
};

export default function CartContext({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    // const updateCart = () => {
    //     setCartItems(() => {});
    // };

    const store = {
        cartItems,
        setCartItems,
        cartOpen,
        setCartOpen,
    };

    return (
        <MyCartContext.Provider value={store}>
            {/* <MyCartOpenContext.Provider value={setCartOpen}> */}
                {/* <MyCartUpdateContext.Provider value={updateCart}> */}
                    {children}
                {/* </MyCartUpdateContext.Provider> */}
            {/* </MyCartOpenContext.Provider> */}
        </MyCartContext.Provider>
    );
}
