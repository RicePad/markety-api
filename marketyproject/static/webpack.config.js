const path = require('path');
module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',

	},
	watch: true,
	devtool: 'source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$|jsx/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['@babel/react']
				}
            }
        ],
		},
		{
			test: /\.css$/,
			use: [
			  'style-loader',
			  {
				loader: 'css-loader',
				options: {
				  importLoaders: 1,
				  modules: true
				}
			  }
			],
			include: /\.module\.css$/
		  },
		  {
			test: /\.css$/,
			use: [
			  'style-loader',
			  'css-loader'
			],
			exclude: /\.module\.css$/
		  }
	]
	},
	resolve: {
		extensions: [
			'.js',
			'.css',
		]
	}
};