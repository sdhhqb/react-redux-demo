import React from 'react';

var Product = React.createClass({
	render: function () {
		return (
			<div>
				{this.props.children}
			</div>			
		);
	}
});
module.exports = Product;