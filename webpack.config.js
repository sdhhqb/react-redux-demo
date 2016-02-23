var webpack = require("webpack");
module.exports = {
	plugins: [
		// new webpack.DefinePlugin({
		//   "process.env": {
		//     NODE_ENV: JSON.stringify("production")
		//   }
		// })
	],
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
	}
};