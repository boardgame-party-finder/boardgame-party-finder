const initialState = {
    isLoading: true,
    roomList: [],
    roomId: null
};

export default function (state: any = initialState, action: Function) {
    switch (action.type) {
        case 'LIST_ROOM':
            return {
                ...state,
                isLoading: false,
                roomList: action.payload.data
            };
        case 'JOIN_ROOM':
            return {
                ...state,
                roomId: parseInt(action.payload, 10)
            };
        default:
            return state;
    }
}