import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import homeReducer from '../container/HomeContainer/reducer';
import createRoomReducer from '../container/CreateRoomContainer/reducer';
import waitingRoomReducer from '../container/WaitingRoomContainer/reducer';
import listRoomReducer from '../container/RoomListContainer/reducer';
import loginReducer from '../container/LoginContainer/reducer';

export default combineReducers({
	form: formReducer,
	homeReducer,
	loginReducer,
	createRoomReducer,
	waitingRoomReducer,
	listRoomReducer,
});
