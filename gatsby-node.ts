import { CreatePageArgs } from 'gatsby';
import type { CreateWebpackConfigArgs } from 'gatsby'

const { promiseGenerateAll } = require('./src/utils/gatsby-node-generator');

exports.createPages = async (params: CreatePageArgs) => {
	promiseGenerateAll(params);
};

exports.onCreateWebpackConfig = ({
	stage,
	actions,
	getConfig,
	loaders,
	plugins,
}: CreateWebpackConfigArgs) => {
	const config = getConfig();
	const miniCssExtractPluginIndex = config.plugins.findIndex(
		(plugin: object) => plugin.constructor.name === 'MiniCssExtractPlugin'
	);

	if (miniCssExtractPluginIndex > -1) {
		// remove miniCssExtractPlugin from plugins list
		config.plugins.splice(miniCssExtractPluginIndex, 1);

		// re-add mini-css-extract-plugin
		if (stage === 'build-javascript') {
			config.plugins.push(
				plugins.extractText({
					filename: `[name].[contenthash].css`,
					chunkFilename: `[name].[contenthash].css`,
					ignoreOrder: true,
				})
			);
		} else {
			config.plugins.push(
				plugins.extractText({
					filename: `[name].css`,
					chunkFilename: `[id].css`,
					ignoreOrder: true,
				})
			);
		}
	}
	actions.replaceWebpackConfig(config);
};
