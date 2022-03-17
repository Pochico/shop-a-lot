import React, { useContext, useReducer } from 'react';
import { initialState, LoginReducer } from './LoginReducer';

// const AuthDispatchContext = React.createContext();
export const MyLoginContext = React.createContext();

export const useLoginContext = () => {
    return useContext(MyLoginContext);
};

export default function LoginContext({ children }) {
    const [userState, dispatch] = useReducer(LoginReducer, initialState);

    let loginStore = {
        userState,
        dispatch,
    };

    return (
        <MyLoginContext.Provider value={loginStore}>
            {children}
        </MyLoginContext.Provider>
    );
}
