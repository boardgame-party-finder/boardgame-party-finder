const initialState = {
    roomData: {}
};

export default function (state: any = initialState, action: Function) {
    if (action.type === 'CREATE_ROOM') { 
        return {
            ...state,
            roomData: action.data
        };
    }
    return state;
}
