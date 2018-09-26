const initialState = {
    name: ''
};

export default function (state: any = initialState, action: Function) {
    if (action.type === 'LOGIN') {
        return {
            ...state,
            roomData: action.data
        };
    }
    return state;
}
