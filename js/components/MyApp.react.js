import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { receiveMenuData, setMemuPath, setMenuItem } from '../actions';
import Header from './Header.react';
import Footer from './Footer.react';
import SideMenu from './menu/SideMenu.react';
import Constants from '../constants/Constants';

var MyApp = React.createClass({
	componentDidMount: function () {
		// this.setState({menuData: Constants.MENUDATA});
		// this.unsubscribe = MenuStore.listen(this._onChange);
		// MenuAction.receive_menu_data(Constants.MENUDATA);
		this.props.dispatch(receiveMenuData(Constants.MENUDATA));
	},
	componentWillUnmount: function() {
		// this.unsubscribe();
	},
	render: function () {
		const { dispatch, curPath, curActive, menuData } = this.props;
		function setCurPath (path) {
			dispatch(setMemuPath(path));
		}
		function setCurActive (path, item) {
			dispatch(setMenuItem(path, item));
		}
		return (
			<div>
				<Header />
				<div id="mainSection" className="mainSection">
					<SideMenu 
						setCurPath={setCurPath}
						setCurActive={setCurActive}
						curPath={curPath}
						curActive={curActive}
						menuData={menuData} />
					
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	},
	_onChange: function(status) {
		this.setState(status);
	}
});

MyApp.propTypes = {
	menuData: PropTypes.array.isRequired,
	curPath: PropTypes.string.isRequired,
	curActive: PropTypes.string.isRequired
};

function select(state) {
	console.log(state);
  return {
    menuData: state.menuData,
    curPath: state.curActive.curPath,
    curActive: state.curActive.curActive
  };
}

export default connect(select)(MyApp);