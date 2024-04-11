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
		title: `长沙云课堂大学生就业在线教学视频站`,
		siteUrl: `https://51cloudclass.com`,
		description: `51元包月学习，最接近企业面试招聘的课程，1500+视频，完整的就业课程体系，运维工程师和全栈开发工程师两大课程`,
		image: 'https://assets.51cloudclass.com/logo.png',
		keywords: `Linux视频, Javascript视频, Go语言视频, Python视频, MySQL数据库视频, 运维工程师, 全栈工程师, 毕业论文`,
	},
	flags: {
		DEV_SSR: true
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
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `tomato`,
				// Disable the loading spinner.
				showSpinner: false,
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
		`gatsby-plugin-sitemap`,
	],

};
