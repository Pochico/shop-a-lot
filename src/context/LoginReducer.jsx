export const initialState = {
    // username: localStorage.getItem('currentUser')
    //     ? localStorage.getItem('currentUser')
    //     : '',
    username: '',
    token: '',
    password: '',
    isLoading: false,
    isLoggedIn: false,
    errorMessage: null,
};

export function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_FIELD_CHANGE': {
            return {
                ...state,
                [action.inputField]: action.payload,
            };
        }

        case 'REQUEST_LOGIN': {
            console.log('REQUEST');
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        }

        case 'LOGIN_SUCCESS': {
            console.log('SUCCESS');
            console.log(action.payload.username);
            localStorage.setItem('currentUser', state.username);
            return {
                ...state,
                username: action.payload.username,
                isLoggedIn: true,
                isLoading: false,
            };
        }

        case 'LOGIN_ERROR': {
            console.log('LOGIN_ERORR');
            return {
                ...state,
                error: true,
                username: '',
                password: '',
                isLoading: false,
            };
        }

        case 'LOGOUT': {
            console.log('LOGOUT');
            localStorage.clear();
            return {
                ...state,
                username: '',
                password: '',
                error: false,
                isLoggedIn: false,
                isLoading: false,
            };
        }

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
