import axios from 'axios';

const ROOT_URL = 'https://boardgame.tr-test-domain.com';

export function login(data: any) {
    const reqPayload = {
        TbN: 'user',
        PK: data.name
    }
    const request = axios.post(`${ROOT_URL}/dev/user`, reqPayload);

    return {
        type: 'LOGIN',
        payload: request,
    };
}
