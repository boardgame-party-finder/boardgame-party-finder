const initialState = {
    isError: false,
    userName: ''
};

export default function (state: any = initialState, action: Function) {
    switch (action.type) {
        case 'LOGIN':
            return state;
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isError: false,
                userName: action.payload
            };
        case 'LOGIN_FAILED':
            return {
                ...state,
                isError: true
            };
        default:
            return state;
    }
}
