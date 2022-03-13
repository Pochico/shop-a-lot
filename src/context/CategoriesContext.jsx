import React, { useState, useContext } from 'react';

export const MyCategoriesContext = React.createContext();

export const useMyCategoriesContext = () => {
    return useContext(MyCategoriesContext);
};

export default function CategoriesContext({ children }) {
    const [categoriesOpen, setCategoriesOpen] = useState(false);

    const store = {
        categoriesOpen,
        setCategoriesOpen,
    };

    return (
        <MyCategoriesContext.Provider value={store}>
            {children}
        </MyCategoriesContext.Provider>
    );
}
