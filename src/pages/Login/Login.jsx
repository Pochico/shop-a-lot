import React from 'react';
import { useLoginContext } from '../../context/LoginContext';

export default function Login() {
    const { userState, dispatch } = useLoginContext();

    const { username, password, error, isLoggedIn } = userState;

    // Si guardas la contraseña en google entra solo en el login al hacer click en cualquier parte de la pantalla

    // let username = '';
    // let password = '';
    // let error = null;

    const handleSubmit = async () => {
        debugger;
        console.log('before prevent');

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
            {isLoggedIn ? (
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
            ) : (
                <form
                    className="login-container"
                    style={formStyle}
                    onSubmit={function (e) {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <h2>Login</h2>
                    <label>
                        <h3>Username</h3>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={function (e) {
                                dispatch({
                                    type: 'INPUT_FIELD_CHANGE',
                                    inputField: 'username',
                                    payload: e.target.value,
                                });
                            }}
                            placeholder="Username"
                            required
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
                            required
                        />
                    </label>

                    <h3 className="error-message" style={errorStyle}>
                        Fullfil the form to login
                    </h3>

                    <button>Login</button>
                </form>
            )}
        </div>
    );
}
