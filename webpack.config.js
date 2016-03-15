var webpack = require("webpack");
var config = {
	entry: './js/index.js',

	output: {
		path: './js/build/',
		filename: 'bundle.js',
		publicPath: '/js/build/'
	},

	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
		]
	},

	plugins: [],
};
var env = process.env.NODE_ENV;
if (env === 'production') {
	config.plugins.push(
		new webpack.DefinePlugin({
		  "process.env": {
		    NODE_ENV: JSON.stringify("production")
		  }
		})
	);
}
module.exports = config;