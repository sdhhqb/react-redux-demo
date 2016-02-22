// footer底部
import React from 'react';

var Footer = React.createClass({
	render: function () {
		var today = this.props.today;
		return (
			<div id="footer" className="footer">
				<span className="cpr">footer.</span>
				{today}
			</div>
		);
	}
});
export default Footer;