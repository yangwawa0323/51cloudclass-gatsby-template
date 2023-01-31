/**
 * @format
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	assetPrefix: `http://asset.51cloudclass.com/assets`,
	siteMetadata: {
		title: `My Gatsby Site`,
		siteUrl: `https://www.51cloudclass.com:8081`,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-mdx',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-no-sourcemaps',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},

			__key: 'pages',
		},
	],
};
