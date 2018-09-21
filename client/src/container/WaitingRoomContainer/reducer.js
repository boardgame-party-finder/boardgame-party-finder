const initialState = {
    isReady: false
};

export default function (state: any = initialState, action: Function) {
    if (action.type === 'TOGGLE_READY') {
        return {
            ...state,
            isReady: !state.isReady
        };
    }
    return state;
}
