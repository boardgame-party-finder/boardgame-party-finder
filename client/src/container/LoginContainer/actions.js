import axios from 'axios';

const ROOT_URL = 'https://boardgame.tr-test-domain.com';

export function login(data: any) {
    const reqPayload = {
        TbN: 'user',
        PK: data
    }

    const request = axios.post(`${ROOT_URL}/dev/user`, reqPayload)

    return {
        type: 'LOGIN',
        payload: request
    }
}

export function loginSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        payload: data,
    };
}

export function loginFailed(data) {
    return {
        type: 'LOGIN_FAILED',
        payload: data,
    };
}

export function setUsername(data) {
    return {
        type: 'SET_USERNAME',
        userName: data,
    };
}