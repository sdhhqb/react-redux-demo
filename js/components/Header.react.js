// header头部
import React from 'react';

var Header = React.createClass({
	render: function () {
		return (
			<div id="header" className="header">
				<span className="logo">logo.</span>
				<h1 className="title">flux-01</h1>
			</div>
		);
	}
});
export default Header;