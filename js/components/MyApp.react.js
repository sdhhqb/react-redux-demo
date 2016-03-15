import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { receiveMenuData, setMemuPath, setMenuItem, fetchUser } from '../actions';
import Header from './Header.react';
import Footer from './Footer.react';
import SideMenu from './menu/SideMenu.react';
import Constants from '../constants/Constants';

import MyApp from './appcomp';

function mapStateToProps(state, ownProps) {
	console.log(state);
	console.log(ownProps);
  return {
    pathname: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(MyApp);