/*
 * action 类型
 */
// 菜单的action
export const RECEIVE_MENU_DATA = 'RECEIVE_MENU_DATA';
export const SET_MENU_PATH = 'SET_MENU_PATH';
export const SET_MENU_ITEM = 'SET_MENU_ITEM';

/*
 * action 创建函数
 */

export function receiveMenuData (menuData) {
  return { type: RECEIVE_MENU_DATA, menuData };
}

export function setMemuPath (path) {
	return { type: SET_MENU_PATH, path };	
}

export function setMenuItem (path, item) {
  return { type: SET_MENU_ITEM, path, item };
}


// user的action
export const REQUEST_USER = 'REQUEST_USER';
export function requestUser (param) {
	return {type: 'REQUEST_USER', param};
}

export const RECEIVE_USER = 'RECEIVE_USER';
export function receiveUser (userData) {
	return {type: 'RECEIVE_USER', userData};
}


export function fetchUser (param) {
	return function (dispatch) {
		//请求开始的action
		dispatch(requestUser(param));

		$.ajax({
			"url": "./json/userData.json?"+ param,
			"type": "get",
			"success": function (re) {
				dispatch(receiveUser(re));
			},
			"error": function () {
				console.log("get user data error");
			}
		});
	}
}