const { resolve } = require('path');
const path = require('path');
const { blogs } = require('./src/data/blog.json');

exports.createPages = ({ actions }) => {
	const { createPage } = actions;


	// const simpleBlogLists = [];
	// blogs.forEach((b) => {
	// 	simpleBlogLists.push({ title: b.title, description: b.description ,image: b.image})
	// })

	// blog1 list page
	createPage({
		path: `/blog1`,
		component: require.resolve('./src/components/blog1/main.js'),
		context: {
			title: 'blog1 list',
			// simpleBlogLists,
			blogs
		}
	})



	// individual blog page

	blogs.forEach(blog => {
		const relatives = blogs.filter((b) => {
			return blog.title !== b.title
		})
		createPage({
			path: `/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`,
			component: require.resolve('./src/components/blog1/custom'),
			context: {
				title: blog.title,
				blog,
				relatives
			}
		})
	});
}