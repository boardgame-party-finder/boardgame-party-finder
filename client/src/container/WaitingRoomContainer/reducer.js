const initialState = {
    isReady: false,
    isInitError: false,
    isGetRoomDataError: false,
    roomData: {}
};

export default function (state: any = initialState, action: Function) {
    switch (action.type) {
        case 'INITIAL_SETUP':
            return state;
        case 'INITIAL_SETUP_PASSED':
            return {
                ...state,
                isInitError: false
            };
        case 'INITIAL_SETUP_FAILED':
            return {
                ...state,
                isInitError: true
            };
        case 'GET_ROOM_DATA':
            return {
                ...state,
                roomData: action.payload.data[0]
            };
        case 'GET_ROOM_DATA_PASSED':
            return {
                ...state,
                isGetRoomDataError: false
            };
        case 'GET_ROOM_DATA_FAILED':
            return {
                ...state,
                isGetRoomDataError: true
            };
        case 'TOGGLE_READY':
            return {
                ...state,
                isReady: !state.isReady
            };
        default :
            return state;
    }
}
