const initialState = {
    isError: false
};

export default function (state: any = initialState, action: Function) {
    switch (action.type) {
        case 'LOGIN':
            return state;
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isError: false
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
