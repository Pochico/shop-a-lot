import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LoginProvider } from './context/LoginContext';
import { initialState, LoginReducer } from './context/LoginReducer';

ReactDOM.render(
    <React.StrictMode>
        <LoginProvider initialState={initialState} reducer={LoginReducer}>
            <App />
        </LoginProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
