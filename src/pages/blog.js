import React from "react"
import {Link, graphql} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
    <Layout>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <h3>Posts</h3>
        {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.id}>
                <Link to={node.slug}>
                    <h4>{node.title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Link>
            </div>
        ))}
    </Layout>
)

export default BlogPage

export const query = graphql`
    query {
        allWordpressPost(
            filter: {categories: {elemMatch: {name: {eq: "Blog"}}}},
            sort: { fields: [date], order: DESC}
            ) 
        {
            edges {
                node {
                    title
                    excerpt
                    slug
                    categories {
                        name 
                    }
                }
            }
        }
    }
`