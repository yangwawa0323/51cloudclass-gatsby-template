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
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				cssLoaderOptions: {
					camelCase: false,
				},
			},
		},
		'gatsby-plugin-mdx',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `docs`,
				path: `${__dirname}/src/docs`,
			},
		},
		{
			resolve: `gatsby-plugin-page-creator`,
			options: {
				path: `${__dirname}/src/docs`,
			},
		},
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
		"gatsby-plugin-use-query-params",
		"gatsby-plugin-smoothscroll",
	],
};
