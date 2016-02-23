import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { receiveMenuData, setMemuPath, setMenuItem, fetchUser } from '../actions';
import Header from './Header.react';
import Footer from './Footer.react';
import SideMenu from './menu/SideMenu.react';
import Constants from '../constants/Constants';

var MyApp = React.createClass({
	componentDidMount: function () {
		this.props.dispatch(fetchUser('abc123'));
		this.props.dispatch(receiveMenuData(Constants.MENUDATA));
	},
	render: function () {
		var today = new Date().toString();
		return (
			<div>
				<Header />
				<div id="mainSection" className="mainSection">
					<SideMenu />					
					{this.props.children}
				</div>
				<Footer today={today} />
			</div>
		);
	},
	_onChange: function(status) {
		this.setState(status);
	}
});

function mapStateToProps(state, ownProps) {
	console.log(state);
	console.log(ownProps);
  return {
    pathname: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(MyApp);