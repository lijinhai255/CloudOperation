module.exports = {
	// 入口
	entry: {
		'01': './jsx/01.jsx',
		
	},
	// 发布
	output: {
		filename: './dist/[name].js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}