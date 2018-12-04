require("dotenv").config();
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(process.env.NODE_ENV);
const config = {
	mode: "development",
	entry: ["./src/index.js"],
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|gif|jpe?g)$/,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							mozjpege: {
								progressive: true,
								quality: 80
							},
							optipng: {
								optimizationLevel: 7
							}
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "giphy search",
			template: "src/index.html"
		})
	]
};

module.exports = config;
