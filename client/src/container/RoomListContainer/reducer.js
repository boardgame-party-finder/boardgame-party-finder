const initialState = {
    roomList: []
};

export default function (state: any = initialState, action: Function) {
    if (action.type === 'LIST_ROOM') {
        return {
            ...state,
            roomList: action.payload.data
        }
    }
    return state;
}