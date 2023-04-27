/** @format */

const fetch = require('node-fetch');

const fakeData = require('../data/allReactPages.json');

// const { getTitle } = require('./tools');

const getAllAsciinemaPages = async ({ graphql, actions }) => {
	let asciinemaPages = [];
	let succeed;
	const response = await fetch(`${process.env.GATSBY_API_SERVER}/api/page/all`)
		.then((response) => (asciinemaPages = response.json()))
		.catch((e) => {
			succeed = false;
			asciinemaPages = fakeData;
		});

	const relatives = fakeData.slice(0, 10);

	asciinemaPages.forEach(async (page) => {
		await actions.createPage({
			path: `/asciinemas/${page.ID}`,
			component: require.resolve(
				'../components/asciinema/AsciinemaPageTemplate.jsx'
			),
			context: {
				content: JSON.parse(page.content),
				relatives,
			},
		});
	});
	return response;
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

const generateChapters = async ({ graphql, actions }) => {
	let url = `${process.env.GATSBY_API_SERVER}/chapters/`;
	const response = await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const { chapters } = data.result;
			chapters.forEach((chpt) => {
				actions.createPage({
					path: `/chapters/${chpt.ID}`,
					component: require.resolve('../components/chapter/ChapterPage.jsx'),
					context: {
						chapter: chpt,
					},
				}); // end of createPage
			});
		});
	return response;
};

/** IMPORTANT: must preload Chapters for provides the course detail page context */
const generateCoursesDetailPage = async ({ graphql, actions }) => {
	let url = `${process.env.GATSBY_API_SERVER}/courses/?preload=Chapters`;
	const response = await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const { courses } = data.result;
			courses.forEach((course) => {
				actions.createPage({
					path: `/courses/${course.ID}`,
					component: require.resolve('../components/course/Detail.jsx'),
					context: {
						course: course,
					},
				}); // end of createPage
			});
		});
	return response;
};

exports.promiseGenerateAll = async (params) => {
	// individual blog page
	await Promise.all([
		// comment at 2023-02-01
		getAsciinemaListPage(params),
		getAllAsciinemaPages(params),
		generateChapters(params),
		generateCoursesDetailPage(params),
	]);
};
