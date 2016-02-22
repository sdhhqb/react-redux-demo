import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux';
import MyApp from './components/MyApp.react';
import MyAppReducers from './reducers';
// route不匹配时显示的默认内容
import NotFound from './components/NotFound.react';

// 
const loggerMiddleware = createLogger()
// 组合myapp-reducer和router-reducer
const reducer = combineReducers(Object.assign({}, MyAppReducers, {
  routing: routeReducer
}));
// 添加中间件
const reduxRouterMiddleware = syncHistory(hashHistory);
const createStoreWithMiddleware = applyMiddleware(
		thunkMiddleware,
		loggerMiddleware,
		reduxRouterMiddleware
	)(createStore);
// 创建store
var store = createStoreWithMiddleware(MyAppReducers);
// touter配置
var rootRoute = {
	component: 'div',
	childRoutes: [{
		path: '/',
		component: MyApp,
		childRoutes: [
			require('./routes/Product'),
			require('./routes/User'),
			{
				path: '*',
				component: NotFound
			}
		]
	}]
};

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={rootRoute} />
  </Provider>,
  document.getElementById('reactapp')
);