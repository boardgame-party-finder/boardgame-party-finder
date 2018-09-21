import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import homeReducer from '../container/HomeContainer/reducer';
import createRoomReducer from '../container/CreateRoomContainer/reducer';

export default combineReducers({
	form: formReducer,
	homeReducer,
	createRoomReducer
});
