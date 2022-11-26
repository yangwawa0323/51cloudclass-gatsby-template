const { resolve } = require('path');
const path = require('path');
const { blogs } = require('./src/data/blog.json');
const fakeData =  require('./src/data/allReactPages.json');


// exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
// 	const config = getConfig()
//   if (config.mode === 'production') {
//     actions.setWebpackConfig({
// 	  ...copyWebpackConfig,	
//       devtool: false
//     });
//   }
// };

const fetch = require('isomorphic-fetch')

const getAllAsciinemaPages = async ({ graphql, actions }) => {
	let asciinemaPages, succeed;
	const response = await fetch(`${process.env.API_SERVER}/api/page/all`)
		.catch(e => {
			succeed = false;
			console.log("[DEBUG]: cannot connect to server, use local fake data")
			asciinemaPages = fakeData;
		})

	if (succeed) {
		asciinemaPages = await response.json();
	}

	asciinemaPages.forEach(page => {
		actions.createPage({
			path: `/asciinema/${page.ID}`,
			component: require.resolve('./src/components/asciinema/AsciinemaPageTemplate.jsx'),
			context: {
				content: JSON.parse(page.content),
			}
		})
	})
}

const getAllBlogs = async ({ graphql, actions }) => {
	return new Promise((resolve, reject) => {
		blogs.forEach(blog => {
			const relatives = blogs.filter((b) => {
				return blog.title !== b.title
			})
			actions.createPage({
				path: `/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`,
				component: require.resolve('./src/components/blog1/Custom.jsx'),
				context: {
					title: blog.title,
					blog,
					relatives
				}
			}) // end of createPage
		});
		resolve()
	})
}

exports.createPages = async (params) => {
	const { actions, graphql } = params

	// blog1 list page
	actions.createPage({
		path: `/blog1`,
		component: require.resolve('./src/components/blog1/Main.jsx'),
		context: {
			title: 'blog1 list',
			// simpleBlogLists,
			blogs
		}
	})

	// blog2 list page
	actions.createPage({
		path: `/blog2`,
		component: require.resolve('./src/components/blog2/Main.jsx'),
		context: {
			title: 'blog2 list',
			// simpleBlogLists,
			blogs
		}
	})

	// individual blog page
	await Promise.all([
		getAllAsciinemaPages(params),
		getAllBlogs(params),
	])

}