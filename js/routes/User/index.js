var userRoute = {
	path: 'userlist',
	getComponents: function (location, callback) {
		require.ensure([], function (require) {
			callback(null, require('./components/User'));
		});
	}
};
module.exports = userRoute;