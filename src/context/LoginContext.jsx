import React from 'react';

// const AuthDispatchContext = React.createContext();
const LoginContext = React.createContext();

export const useLoginContext = () => React.useContext(LoginContext);

export const LoginProvider = ({ children, initialState, reducer }) => {
    const [globalState, dispatch] = React.useReducer(reducer, initialState);

    return (
        <LoginContext.Provider value={[globalState, dispatch]}>
            {/* <AuthDispatchContext.Provider value={AuthReducer}> */}
            {children}
            {/* </AuthDispatchContext.Provider> */}
        </LoginContext.Provider>
    );
};
