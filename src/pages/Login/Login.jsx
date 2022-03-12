import React, { useReducer } from 'react';
import { useLoginContext } from '../../context/LoginContext';
import { LoginReducer, initialState } from '../../context/LoginReducer';

export default function Login() {
    const [state, dispatch] = useReducer(LoginReducer, initialState);
    console.log(state);

    const { username, password, error } = state;

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    window.localStorage.setItem(
                        'token',
                        JSON.stringify(json.token)
                    );
                });
            console.log(window.localStorage.getItem('token'));
            dispatch({ type: 'LOGIN_SUCCESS' });
            // console.log(initialState);
        } catch (err) {
            dispatch({ type: 'LOGIN_ERROR' });
        }
    };

    const formStyle = {
        backgroundColor: error
            ? 'rgba(255, 0, 0, 0.5)'
            : 'rgba(255, 255, 255, 0.3)',
    };

    const errorStyle = {
        color: error ? 'white' : 'transparent',
    };

    return (
        <div>
            <form style={formStyle} onSubmit={onSubmit}>
                <h2>Login</h2>
                <label>
                    <h3>Username</h3>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) =>
                            dispatch({
                                type: 'INPUT_FIELD_CHANGE',
                                inputField: 'username',
                                payload: e.target.value,
                            })
                        }
                        placeholder="Username"
                    />
                </label>
                <label>
                    <h3>Password</h3>
                    <input
                        className="password-field"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) =>
                            dispatch({
                                type: 'INPUT_FIELD_CHANGE',
                                inputField: 'password',
                                payload: e.target.value,
                            })
                        }
                        placeholder="Password"
                    />
                </label>

                <h3 className="error-message" style={errorStyle}>
                    Fullfil the form to login
                </h3>

                <button>Login</button>
            </form>
        </div>
    );
}
