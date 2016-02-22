import { combineReducers } from 'redux';
import { RECEIVE_MENU_DATA, SET_MENU_PATH, SET_MENU_ITEM } from './actions';

function menuData (state = [], action) {
	switch (action.type) {
		case RECEIVE_MENU_DATA:
			return action.menuData;
		default:
			return state;
	}
}

function curActive (state = {curPath:'', curActive:''}, action) {
	switch (action.type) {
		case SET_MENU_PATH:
			return Object.assign({}, state, {"curPath": action.path});
		case SET_MENU_ITEM:
			return {"curPath": action.path, "curActive": action.item};
		default:
			return state;
	}	
}

var myApp = combineReducers({
	menuData,
	curActive
});

export default myApp;