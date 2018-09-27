import axios from 'axios';

const ROOT_URL = 'https://boardgame.tr-test-domain.com';

export function listRoom() {
    const request = axios.get(`${ROOT_URL}/dev/rooms`);

    return {
        type: 'LIST_ROOM',
        payload: request,
    };
}

export function joinRoom(roomId) {
    return {
        type: 'JOIN_ROOM',
        payload: roomId
    };
}
