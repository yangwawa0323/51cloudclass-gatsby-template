import type { Page } from './../components/index.d';
/** @format */
import type { CreatePageArgs, GatsbyNode, NodeInput } from "gatsby";
import type { Body } from 'node-fetch';

import path from 'path';
const fetch = require('node-fetch');

const fakeData = require('../data/allReactPages.json');

import type { IAsciinemaPageInput, IChapterInput, ICourseInput } from './types'

interface IApiResponse {
	asciinemaPages: Array<IAsciinemaPageInput>,
	chapters: Array<IChapterInput>,
	courses: Array<ICourseInput>,
}

interface IChapterInternalContent {
	chapter: IChapterInput,
}

const fetchAllData: () => Promise<IApiResponse> = async () => {

	let chapterUrl = `${process.env.GATSBY_API_SERVER}/chapters`;

	const chaptersResponse = await fetch(chapterUrl)
		.then((response: Body) => response.json())


	let courseUrl = `${process.env.GATSBY_API_SERVER}/courses`;

	const coursesResponse = await fetch(courseUrl)
		.then((response: Body) => response.json())

	return {
		asciinemaPages: [],
		chapters: chaptersResponse.result.chapters,
		courses: coursesResponse.result.courses,
	}
}


export const createSchemaCustomization: GatsbyNode[`createSchemaCustomization`] = (gatsbyApi) => {
	const { createTypes } = gatsbyApi.actions;


	// 1st try: Chapter from `course_id`, by : "_id" 
	createTypes(`
		type Chapter implements Node {
			id: ID!
			_id: Int!
			course_id: Int!
			course: Course @link(by: "_id", from:"course_id")
		}
		type Course implements Node {
			id: ID!
			_id: Int!
			chapters: [Chapter] @link(by : "course_id", from: "_id")
		}
	`)
}

export const sourceNodes: GatsbyNode[`sourceNodes`] = async (gastbyApi) => {
	const { reporter, createNodeId, createContentDigest } = gastbyApi;
	// Add node here
	// 1. defined the node of asciinema page.

	const { chapters, asciinemaPages, courses } = await fetchAllData();

	chapters.forEach(chapter => {

		// using `createNodeId` helper function generate uuid format ID to
		// replace the chapter.ID.
		const { ID, ...chapterData } = chapter
		reporter.info(`[DEBUG]: create node for **chapter** ${ID}`);
		const node = {
			...chapterData,
			id: createNodeId(`chapter-${ID}`),
			_id: ID,
			internal: {
				content: JSON.stringify(chapter),
				type: `Chapter`,
				contentDigest: createContentDigest(chapter)

			}
		} satisfies NodeInput
		// 2. use `createNode` function to create the node.
		gastbyApi.actions.createNode(node);
		// 3. in graphQL to query the node.
	})

	courses.forEach(course => {

		// using `createNodeId` helper function generate uuid format ID to
		// replace the chapter.ID.
		const { ID, ...courseData } = course
		reporter.info(`[DEBUG]: create node for **course** ${ID}`);
		const node = {
			...courseData,
			id: createNodeId(`course-${ID}`),
			_id: ID,
			internal: {
				type: `Course`,
				contentDigest: createContentDigest(course)
			}
		} satisfies NodeInput
		// 2. use `createNode` function to create the node.
		gastbyApi.actions.createNode(node);
		// 3. in graphQL to query the node.
	})
}


const getAllAsciinemaPages = async ({ actions, reporter, createContentDigest, createNodeId }: CreatePageArgs) => {
	let asciinemaPages: Promise<Array<Page>> | null = null;
	let succeed: boolean;
	const response = await fetch(`${process.env.GATSBY_API_SERVER}/page/all`)
		.then((response: Body) => (asciinemaPages = response.json()))
		.catch(() => {
			succeed = false;
			asciinemaPages = fakeData;
		});

	const relatives = fakeData.slice(0, 10);

	reporter.info(`[DEBUG]: create sample asciinema pages...`);

	(await asciinemaPages!).forEach((page: Page) => {



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

const getAsciinemaListPage = async ({ actions, reporter }: CreatePageArgs) => {

	reporter.info(`[DEBUG] create sample asciinema list page...`);

	actions.createPage({
		path: `/asciinema-list`,
		component: path.resolve(__dirname, '../components/asciinema/AsciinemaList.jsx'),
		context: {
			asciinemas: fakeData,
		},
	});
};

const generateChapters = async ({ actions, reporter, createNodeId }: CreatePageArgs) => {

	reporter.info(`[DEBUG] create chapters pages...`);

	const { chapters, asciinemaPages } = await fetchAllData();

	chapters.forEach((chpt) => {
		const chapterUuid = createNodeId(`chapter-${chpt.ID}`)
		actions.createPage({
			path: `/chapters/${chapterUuid}`,
			component: path.resolve(__dirname, '../components/chapter/ChapterPage.jsx'),
			context: {
				uuid: chapterUuid,
			},
		}); // end of createPage
	});
};

/** IMPORTANT: must preload Chapters for provides the course detail page context */
const generateCoursesDetailPage = async ({ actions, reporter, createNodeId }: CreatePageArgs) => {
	// let url = `${process.env.GATSBY_API_SERVER}/courses/?preload=Chapters`;

	reporter.info(`[DEBUG]: create course detail pages...`);

	const { courses } = await fetchAllData();

	courses.forEach((course) => {

		const { ID, ...courseData } = course;

		const courseUuid = createNodeId(`course-${ID}`)
		actions.createPage({
			path: `/courses/${courseUuid}`,
			component: path.resolve(__dirname, '../components/course/Detail.jsx'),
			context: {
				uuid: courseUuid,
			},
		}); // end of createPage
	});
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
