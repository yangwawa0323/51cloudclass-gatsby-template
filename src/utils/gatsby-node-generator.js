/** @format */

const { modalUnstyledClasses } = require('@mui/material');
const fetch = require('isomorphic-fetch');

const fakeData = require('../data/allReactPages.json');
const { blogs } = require('../data/blog.json');
// const { getTitle } = require('./tools');
const { ConstructionOutlined } = require('@mui/icons-material');

const getAllAsciinemaPages = async ({ graphql, actions }) => {
	let asciinemaPages = [];
	let succeed;
	const response = await fetch(
		`${process.env.GATSBY_API_SERVER}/api/page/all`
	).catch((e) => {
		succeed = false;
		asciinemaPages = fakeData;
	});

	if (succeed) {
		asciinemaPages = await response.json();
	}

	const relatives = fakeData.slice(0, 10);

	return new Promise((resolve, reject) => {
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
		blogs.forEach((blog) => {
			const relatives = blogs.filter((b) => {
				return blog.title !== b.title;
			});
			actions.createPage({
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

/*
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
*/

const generateChapters = async ({ graphql, actions }) => {
	let url = `${process.env.GATSBY_API_SERVER}/chapters/`;
	const response = await fetch(url);

	const data = await response.json();
	const { chapters } = data.result;

	return new Promise((resolve, reject) => {
		chapters.forEach((chpt) => {
			actions.createPage({
				path: `/chapters/${chpt.ID}`,
				component: require.resolve('../components/chapter/ChapterPage.jsx'),
				context: {
					chapter: chpt,
				},
			}); // end of createPage
		});
		resolve();
	});
};

/** IMPORTANT: must preload Chapters for provides the course detail page context */
const generateCoursesDetailPage = async ({ graphql, actions }) => {
	let url = `${process.env.GATSBY_API_SERVER}/courses/?preload=Chapters`;
	const response = await fetch(url);

	const data = await response.json();
	const { courses } = data.result;

	// console.log('generateCoursesDetailPage:', courses);

	return new Promise((resolve, reject) => {
		courses.forEach((course) => {
			// console.log('course: ', course);
			actions.createPage({
				path: `/courses/${course.ID}`,
				component: require.resolve('../components/course/Detail.jsx'),
				context: {
					course: course,
				},
			}); // end of createPage
		});
		resolve();
	});
};

exports.promiseGenerateAll = async (params) => {
	// individual blog page
	await Promise.all([
		generateBlog1(params),
		// generateBlog2(params),
		getAllBlogs(params),
		// comment at 2023-02-01
		getAllAsciinemaPages(params),
		getAsciinemaListPage(params),
		generateChapters(params),
		generateCoursesDetailPage(params),
	]);
};
