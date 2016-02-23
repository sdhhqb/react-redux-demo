import { REQUEST_USER, RECEIVE_USER } from '../actions';

function userData (state = {}, action) {
	console.log("reducer 003");
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
export default userData;