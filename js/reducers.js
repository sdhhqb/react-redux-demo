import { combineReducers } from 'redux';
import { RECEIVE_MENU_DATA, SET_MENU_PATH, SET_MENU_ITEM, REQUEST_USER, RECEIVE_USER } from './actions';

function menuData (state = [], action) {
	console.log("reducer 001");
	switch (action.type) {
		case RECEIVE_MENU_DATA:
			return action.menuData;
		default:
			return state;
	}
}

function curPath (state = '', action) {
	console.log("reducer 002");
	switch (action.type) {
		case SET_MENU_ITEM:
		case SET_MENU_PATH:
			return action.path;
		default:
			return state;
	}
}

function curActive (state = {curPath:'', curActive:''}, action) {
	console.log("reducer 003");
	switch (action.type) {
		case SET_MENU_PATH:
			return Object.assign({}, state, {"curPath": curPath(state.curPath, action)});
		case SET_MENU_ITEM:
			return {"curPath": curPath(state.curPath, action), "curActive": action.item};
		default:
			return state;
	}	
}

function userData (state = {}, action) {
	console.log("reducer 004");
	switch (action.type) {
		case REQUEST_USER:
			console.log("userData request sending. param: " + action.param);
			return state;
		case RECEIVE_USER:
			console.log("userData received.");
			return Object.assign({}, action.userData);
		default:
			return state;
	}
}

var myApp = combineReducers({
	menuData,
	curActive,
	userData
});

export default myApp;