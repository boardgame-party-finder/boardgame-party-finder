const initialState = {
    isCreateRoomError: false,
    roomId: null
};

export default function (state: any = initialState, action: Function) {
    switch (action.type) {
        case 'CREATE_ROOM':
            console.log('roomId', action.payload.data)
            return {
                ...state,
                roomId: parseInt(action.payload.data, 10)
            };
        case 'CREATE_ROOM_SUCCESS':
            return {
                ...state,
                isCreateRoomError: false
            };
        case 'CREATE_ROOM_FAILED':
            return {
                ...state,
                isCreateRoomError: true
            };
        case 'CLEAR_CREATEROOM_ROOM_ID':
            return {
                ...state,
                roomId: null
            };
        default:
            return state;
    }
}
