import axios from 'axios';

const ROOT_URL = 'https://boardgame.tr-test-domain.com';

export function listRoom() {
    const request = axios.get(`${ROOT_URL}/dev/room`);

    return {
        type: 'LIST_ROOM',
        payload: request,
    };
}
