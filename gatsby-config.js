module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.51cloudclass.com',
    title: '51cloudclass website',
    description: 'Frontend Masters Intro to Gatsby course projects',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-remark-images',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `./src/components`,
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'posts',
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 1200,
    //         },
    //       },
    //     ],
    //     defaultLayouts: {
    //       posts: require.resolve('./src/components/post-layout.js'),
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve('./src/components/post-layout.js'),
    //   },
    // },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/img`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: 'vnkupgyb',
    //     dataset: 'production',
    //   },
    // },
  ],
};
