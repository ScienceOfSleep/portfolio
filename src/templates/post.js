import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import SEO from "../components/seo";
import Logo from "../components/logo";
import Img from "gatsby-image";
import NavBar from "../components/navbar";
import MainGrid from "../components/maingrid";
import TitleSection from "../components/titlesection";
import SkinnyHero from "../components/skinnyhero";
import {css} from "@emotion/core";

export default ({ data }) => {
    return (
        <Layout>
            {data.allWordpressPost.edges.map(({ node }) =>
                <MainGrid key={node.id}>
                    <SEO title={node.title} description={node.content} />

                    <NavBar/>

                    <Logo/>

                    <TitleSection>
                        <h1>{node.title}</h1>
                        <h2>By Josh Steele</h2>
                    </TitleSection>

                    <SkinnyHero
                        fluid={data.desktopImage.childImageSharp.fluid}
                        alt="Random Unsplash image for flavor"
                    />

                    <section
                            css={css`
                              grid-area: mainCopy;
                              padding-right: 1rem;
                              padding-left: 1rem;
                              align-self: center;
                              h4{
                              padding-top: .5rem;
                              }
                              @media only screen and (min-width: 64.063em) {
                              padding-right: 4rem;
                              padding-left: 0;
                              }
                            `}
                            dangerouslySetInnerHTML={{ __html: node.content }}
                    />

                </MainGrid>
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