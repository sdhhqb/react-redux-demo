module.exports = {
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