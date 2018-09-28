const initialState = {
    isLoading: true,
    roomList: [],
    roomId: null,
    isJoinRoomError: false
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
                ...state
            };
        case 'JOIN_ROOM_SUCCESS':
            return {
                ...state,
                roomId: action.payload.roomId,
                isJoinRoomError: false
            };
        case 'JOIN_ROOM_FAIL':
            return {
                ...state,
                isJoinRoomError: true
            };
        case 'JOIN_ROOM_FAIL':
            return {
                ...state,
                isJoinRoomError: true
            };
        case 'CLEAR_ROOMLIST_ROOM_ID':
            return {
                ...state,
                roomId: null
            };
        default:
            return state;
    }
}