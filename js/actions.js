/*
 * action 类型
 */

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