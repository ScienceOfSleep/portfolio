import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import SEO from "../components/seo";

export default ({ data }) => {
    return (
        <Layout>
            {data.allWordpressPost.edges.map(({ node }) =>
                <div key={node.id}>
                    <SEO title="{node.title}" />
                    <h1>{node.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: node.content }} />
                </div>
            )}
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        allWordpressPost(filter: {slug: {eq: $slug}})
        {
            edges {
                node {
                    title
                    excerpt
                    content
                    slug
                    categories {
                        name
                    }
                }
            }
        }
    }
`