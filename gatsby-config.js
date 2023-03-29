/**
 * @format
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	assetPrefix: `https://assets.51cloudclass.com/assets`,
	siteMetadata: {
		title: `My Gatsby Site`,
		siteUrl: `https://www.51cloudclass.com`,
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
