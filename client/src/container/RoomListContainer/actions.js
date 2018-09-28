import axios from 'axios';

const ROOT_URL = 'https://boardgame.tr-test-domain.com';

export function listRoom() {
    const request = axios.get(`${ROOT_URL}/dev/rooms`);

    return {
        type: 'LIST_ROOM',
        payload: request,
    };
}

export function joinRoom(data) {
    const request = axios.post(`${ROOT_URL}/dev/join?room=${data.roomId}&user=${data.userName}`);

    console.log('join room list')

    return {
        type: 'JOIN_ROOM',
        payload: request
    };
}

export function joinRoomSuccess(data) {
    return {
        type: 'JOIN_ROOM_SUCCESS',
        payload: data
    };
}

export function joinRoomFail(data) {
    return {
        type: 'JOIN_ROOM_FAIL',
        payload: data
    };
}

export function clearRoomListRoomId() {
    return {
        type: 'CLEAR_ROOMLIST_ROOM_ID'
    };
}