import axios from 'axios';

const ROOT_URL = 'https://boardgame.tr-test-domain.com';

export function initialSetup(data) {
    const request = axios.post(`${ROOT_URL}/dev/join?room=${data.roomId}&user=${data.userName}`);

    return {
        type: 'INITIAL_SETUP',
        payload: request,
    };
}

export function initialSetupPassed(data) {
    return {
        type: 'INITIAL_SETUP_PASSED',
        payload: data,
    };
}

export function initialSetupFailed(data) {
    return {
        type: 'INITIAL_SETUP_FAILED',
        payload: data,
    };
}

export function getRoomData(roomId) {
    const request = axios.get(`${ROOT_URL}/dev/room?room=${roomId}`);

    return {
        type: 'GET_ROOM_DATA',
        payload: request,
    };
}

export function getRoomDataPassed(data) {
    return {
        type: 'GET_ROOM_DATA_PASSED',
        payload: data,
    };
}

export function getRoomDataFailed(data) {
    return {
        type: 'GET_ROOM_DATA_FAILED',
        payload: data,
    };
}

export function toggleReady(data) {
    const request = axios.patch(`${ROOT_URL}/dev/ready?room=${data.roomId}&user=${data.userName}&ready=${!data.isReady}`);

    return {
        type: 'TOGGLE_READY',
        payload: request
    };
}

export function exitRoom(data) {
    const request = axios.patch(`${ROOT_URL}/dev/leave?room=${data.roomId}&user=${data.userName}`);

    return {
        type: 'TOGGLE_READY',
        payload: request
    };
}

export function clearReady(data) {
    return {
        type: 'CLEAR_READY'
    };
}