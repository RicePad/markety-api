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
			use: ["style-loader", "css-loader"]
		},
	]
	},
	resolve: {
		extensions: [
			'.js',
			'.css',
		]
	}
};