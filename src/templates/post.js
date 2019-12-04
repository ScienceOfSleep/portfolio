import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import SEO from "../components/seo";
import Logo from "../components/logo";
import Img from "gatsby-image";
import NavBar from "../components/navbar";

export default ({ data }) => {
    return (
        <Layout>
            {data.allWordpressPost.edges.map(({ node }) =>
                <div className={'mainGrid'} key={node.id}>
                    <SEO title="{node.title}" />
                    <div className={'navDiv'}>
                        <NavBar/>
                    </div>
                    <h1 className={'subtitle'}
                        style={{backgroundColor: '#1C1718'}}>
                        {node.title}
                    </h1>
                    <h2 className={'title'}
                        style={{backgroundColor: '#1C1718'}}>
                        By Josh Steele
                    </h2>
                    <div className={'hero'}>
                        <Img
                            fluid={data.desktopImage.childImageSharp.fluid}
                            alt=""
                        />
                    </div>
                    <div className={'contentTwo'} dangerouslySetInnerHTML={{ __html: node.content }} />
                    <div className={'logo'}>
                        <Logo/>
                    </div>
                    <div className={'leftBarA'} style={{backgroundColor: '#1C1718'}}></div>
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
        desktopImage: file(relativePath: { eq: "toni-reed-bluejay-unsplash-desktop.png" }) {
            childImageSharp {
                fluid(maxWidth: 746 maxHeight: 950) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`