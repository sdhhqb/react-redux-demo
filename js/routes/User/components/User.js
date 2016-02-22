import React from 'react';

var User = React.createClass({
	render: function () {
		var now = new Date().toLocaleString();
		return (
			<div>user content {"now : " + now}</div>
		);
	}
});
module.exports = User;