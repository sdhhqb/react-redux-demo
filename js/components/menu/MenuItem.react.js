// menuItem 菜单条目组件
import React from 'react';
import { Link } from 'react-router';
// import MenuAction from '../../actions/MenuAction';

var MenuItem = React.createClass({
	showRoute: function () {
		var route = this.props.item.route;
		location.hash = route;
		// this.chgKey();
	},
	chgKey: function () {
		if (this.props.curPath != this.props.selfPath) {
			this.props.setCurActive(this.props.selfPath, this.props.item.route);
			// MenuAction.set_menu_item(this.props.selfPath, this.props.item.route);
		}
	},
	render: function () {
		var className = "menuItem";
		var curKey = this.props.curPath;
		
		if (this.props.item.route == this.props.curActive) {
			className += " active";
		}

		return (
			<li className={className}><Link to={"/" + this.props.item.route}>{this.props.item.name}</Link></li>
		);

		// return (
		// 	<li className={className} onClick={this.showRoute}>{this.props.item.name}</li>
		// );
	}
});
export default MenuItem;