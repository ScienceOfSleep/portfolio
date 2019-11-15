/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
    query {
        allWordpressPost(sort: { fields: [date], order: DESC }) {
            edges {
                node {
                    slug
                }
            }
        }
    }
  `)

    // Check for errors
    if (result.errors) {
        console.error(result.errors);
    }

    result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables
                slug: node.slug,
            },
        })
    })

    console.log(JSON.stringify(result, null, 4))
}

// You can delete this file if you're not using it
