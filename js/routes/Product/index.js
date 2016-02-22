import Product from './components/Product';

var productRoute = {
	path: 'product',

	component: Product,

	getChildRoutes: function (location, callback) {
		require.ensure([], function (require) {
			callback(null, [
				require('./routes/ProductList'),
				require('./routes/SaleList')
			]);
		});
	}
};
module.exports = productRoute;