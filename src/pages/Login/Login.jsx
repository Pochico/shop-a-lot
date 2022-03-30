import React from 'react';
import { useLoginContext } from '../../context/LoginContext';

export default function Login() {
    const { userState, dispatch } = useLoginContext();

    const { username, password, error } = userState;

    // Si guardas la contraseña en google entra solo en el login al hacer click en cualquier parte de la pantalla

    // let username = '';
    // let password = '';
    // let error = null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('userState LOGIN SUBMIT:' + username);

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
                .then((json) => {});
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: { username: username },
            });
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
            {username === null || username === '' ? (
                <form
                    className="login-container"
                    style={formStyle}
                    onSubmit={() => handleSubmit()}
                >
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
            ) : (
                <div className="login-container">
                    <h3 className="logged-in-text">
                        Welcome {username}, how was your day?
                    </h3>
                    <button
                        onClick={() =>
                            dispatch({
                                type: 'LOGOUT',
                            })
                        }
                        className="logged-in-button"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
