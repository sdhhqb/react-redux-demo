import { RECEIVE_MENU_DATA, SET_MENU_PATH, SET_MENU_ITEM } from '../actions';


function sideMenu (state = {
	curPath: '',
	curActive: '',
	menuData: []
}, action) {
	console.log("reducer 001");
	switch (action.type) {
		case RECEIVE_MENU_DATA: 
			return Object.assign({}, state, {menuData: action.menuData});
		case SET_MENU_ITEM:
			return Object.assign({}, state, {curPath: action.path, curActive: action.item});
		case SET_MENU_PATH:
			return Object.assign({}, state, {curPath: action.path});
		default:
			return state;
	}
}

export default sideMenu;