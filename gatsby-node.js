
const { promiseGenerateAll } = require('./src/utils/gatsby-node-generator')

exports.createPages = async (params) => {
	promiseGenerateAll(params)
}