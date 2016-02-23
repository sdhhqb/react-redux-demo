// menu侧边栏菜单组件
// 菜单写的有点复杂，写成多层级的了。一般两层的菜单不用这么复杂。
import React from 'react';
import { connect } from 'react-redux';
import { receiveMenuData, setMemuPath, setMenuItem, fetchUser } from '../../actions';
import MenuHierarchy from './MenuHierarchy.react';

var SideMenu = React.createClass({
	componentDidMount: function () {
		console.log("side menu did mount");
	},
	render: function () {
		const { dispatch } = this.props;

		function setCurPath (path) {
			dispatch(setMemuPath(path));
		}
		function setCurActive (path, item) {
			dispatch(setMenuItem(path, item));
		}
		var menuData = this.props.menuData;
		var curPath = this.props.curPath;
		var curActive = this.props.curActive;

		var key, list = [];

		console.log("sideMenu render, menuData: ", menuData);
		console.log("curPath: "+curPath, "curActive: "+curActive);

		for (var i = 0; i < menuData.length; i++) {
			key = "level" + menuData[i].level + "-" + i;
			list.push(
				<MenuHierarchy 
					key={key}
					keyFlag={i}
					selfPath={key}
					curPath={this.props.curPath}
					curActive={this.props.curActive}
					setCurPath={setCurPath}
					setCurActive={setCurActive}
					item={menuData[i]} />);
		}
		
		return (
			<ul id="sideMenu" className="sideMenu">
				{list}
			</ul>
		);
	}
});

function mapStateToProps(state) {
  return {
    menuData: state.sidemenu.menuData,
    userData: state.sidemenu.userData,
    curPath: state.sidemenu.curPath,
    curActive: state.sidemenu.curActive
  };
}
export default connect(mapStateToProps)(SideMenu);
// export default SideMenu;