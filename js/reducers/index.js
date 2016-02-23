import { combineReducers } from 'redux';
import sidemenu from './sidemenu';
import product from './product';
import userData from './user';

// 合并reducer
const todoApp = combineReducers({
	sidemenu,
	product,
	userData
})

export default todoApp
