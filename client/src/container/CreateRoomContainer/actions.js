import axios from 'axios';

const ROOT_URL = 'https://boardgame.tr-test-domain.com';

export function createRoom(data: any) {
    const reqPayload = {
        TbN: 'room',
        PK: (Math.floor(Math.random() * 900000) + 100000).toString(),
        GameType: data.gameType,
        Name: data.roomName,
        Max: parseInt(data.max, 10),
        Min: 2,
        Location: data.location
    };
    const request = axios.post(`${ROOT_URL}/dev/room`, reqPayload);

    return {
        type: 'CREATE_ROOM',
        payload: request,
    };
}

export function createRoomSuccess(data) {
    return {
        type: 'CREATE_ROOM_SUCCESS',
        payload: data,
    };
}

export function createRoomFailed(data) {
    return {
        type: 'CREATE_ROOM_FAILED',
        payload: data,
    };
}

export function clearCreateRoomRoomId(data) {
    return {
        type: 'CLEAR_CREATEROOM_ROOM_ID',
        payload: data,
    };
}