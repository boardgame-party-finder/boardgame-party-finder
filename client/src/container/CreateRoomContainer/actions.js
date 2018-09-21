import axios from 'axios';

const ROOT_URL = 'https://boardgame.tr-test-domain.com';

export function createRoom(data: any) {
    const reqPayload = {
        TbN: 'room',
        PK: (Math.floor(Math.random() * 90000) + 10000).toString(),
        GameType: data.gameType,
        Name: data.roomName,
        Max: data.numberOfPlayers,
        Min: 2
    }
    const request = axios.post(`${ROOT_URL}/dev/room`, reqPayload);

    return {
        type: 'CREATE_ROOM',
        payload: request,
    };
}
