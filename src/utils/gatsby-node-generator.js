/** @format */

const { modalUnstyledClasses } = require('@mui/material');
const fetch = require('isomorphic-fetch');

const fakeData = require('../data/allReactPages.json');
const { blogs } = require('../data/blog.json');
// const { getTitle } = require('./tools');

const getAllAsciinemaPages = async ({ graphql, actions }) => {
	let asciinemaPages = [];
	let succeed;
	const response = await fetch(
		`${process.env.GATSBY_API_SERVER}/api/page/all`
	).catch((e) => {
		succeed = false;
		console.log('[DEBUG]: cannot connect to server, use local fake data');
		asciinemaPages = fakeData;
	});

	if (succeed) {
		asciinemaPages = await response.json();
	}

	const relatives = fakeData.slice(0, 10);

	return new Promise((resolve, reject) => {
		console.log('[DEBUG]: asciinemaPages ', asciinemaPages);
		asciinemaPages.forEach(async (page) => {
			await actions.createPage({
				path: `/asciinema/${page.ID}`,
				component: require.resolve(
					'../components/asciinema/AsciinemaPageTemplate.jsx'
				),
				context: {
					content: JSON.parse(page.content),
					relatives,
				},
			});
		});
	});
};

const getAsciinemaListPage = async ({ graphql, actions }) => {
	await actions.createPage({
		path: `/asciinema-list`,
		component: require.resolve('../components/asciinema/AsciinemaList.jsx'),
		context: {
			asciinemas: fakeData,
		},
	});
};

const getAllBlogs = async ({ graphql, actions }) => {
	return new Promise((resolve, reject) => {
		blogs.forEach(async (blog) => {
			const relatives = blogs.filter((b) => {
				return blog.title !== b.title;
			});
			await actions.createPage({
				path: `/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`,
				component: require.resolve('../components/blog1/Custom.jsx'),
				context: {
					title: blog.title,
					blog,
					relatives,
				},
			}); // end of createPage
		});
		resolve();
	});
};

const generateBlog1 = async ({ graphql, actions }) => {
	// blog1 list page
	await actions.createPage({
		path: `/blog1`,
		component: require.resolve('../components/blog1/Main.jsx'),
		context: {
			title: 'blog1 list',
			// simpleBlogLists,
			blogs,
		},
	});
};

const generateBlog2 = async ({ graphql, actions }) => {
	// blog2 list page
	await actions.createPage({
		path: `/blog2`,
		component: require.resolve('../components/blog2/Main.jsx'),
		context: {
			title: 'blog2 list',
			// simpleBlogLists,
			blogs,
		},
	});
};

exports.promiseGenerateAll = async (params) => {
	// individual blog page
	await Promise.all([
		generateBlog1(params),
		generateBlog2(params),
		getAllBlogs(params),
		// comment at 2023-02-01
		getAllAsciinemaPages(params),
		getAsciinemaListPage(params),
	]);
};
