import { CreatePageArgs } from 'gatsby';
/** @format */
import path from 'path';
import type { GatsbyNode, CreatePageArgs } from "gatsby";
import type { Body } from 'node-fetch';

const fetch = require('node-fetch');

const fakeData = require('../data/allReactPages.json');

// const { getTitle } = require('./tools');

interface Page {
	ID: number
	content: string
}

interface Chapter {
	ID: number
}

interface Course {
	ID: number
}

const getAllAsciinemaPages = async ({ actions }: CreatePageArgs) => {
	let asciinemaPages: Promise<Array<Page>> | [] = [];
	let succeed: boolean;
	const response = await fetch(`${process.env.GATSBY_API_SERVER}/api/page/all`)
		.then((response: Body) => (asciinemaPages = response.json()))
		.catch(() => {
			succeed = false;
			asciinemaPages = fakeData;
		});

	const relatives = fakeData.slice(0, 10);

	(await asciinemaPages).forEach((page: Page) => {
		actions.createPage({
			path: `/asciinemas/${page.ID}`,
			component: path.resolve(__dirname,
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

const getAsciinemaListPage = async ({ actions }: CreatePageArgs) => {
	await actions.createPage({
		path: `/asciinema-list`,
		component: path.resolve(__dirname, '../components/asciinema/AsciinemaList.jsx'),
		context: {
			asciinemas: fakeData,
		},
	});
};

const generateChapters = async ({ actions }: CreatePageArgs) => {
	let url = `${process.env.GATSBY_API_SERVER}/chapters/`;
	const response = await fetch(url)
		.then((response: Body) => response.json())
		.then((data: { result: { chapters: Array<Chapter> } }) => {
			const { chapters } = data.result;
			chapters.forEach((chpt) => {
				actions.createPage({
					path: `/chapters/${chpt.ID}`,
					component: path.resolve(__dirname, '../components/chapter/ChapterPage.jsx'),
					context: {
						chapter: chpt,
					},
				}); // end of createPage
			});
		});
	return response;
};

/** IMPORTANT: must preload Chapters for provides the course detail page context */
const generateCoursesDetailPage = async ({ actions }: CreatePageArgs) => {
	let url = `${process.env.GATSBY_API_SERVER}/courses/?preload=Chapters`;
	const response = await fetch(url)
		.then((response: Body) => response.json())
		.then((data: { result: { courses: Array<Course> } }) => {
			const { courses } = data.result;
			courses.forEach((course) => {
				actions.createPage({
					path: `/courses/${course.ID}`,
					component: path.resolve(__dirname, '../components/course/Detail.jsx'),
					context: {
						course: course,
					},
				}); // end of createPage
			});
		});
	return response;
};

type Action = Promise<any> | void

exports.promiseGenerateAll = async (params: CreatePageArgs) => {
	// individual blog page
	let actions: Array<Action> = [
		getAsciinemaListPage(params),
		getAllAsciinemaPages(params),
		generateChapters(params),
		generateCoursesDetailPage(params),
	]
	await Promise.all(	// comment at 2023-02-01
		actions
	);
};
