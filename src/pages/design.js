import React from "react"
import {graphql, Link} from "gatsby";
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import NavBar from "../components/navbar"
import MainGrid from "../components/maingrid"
import TitleSection from "../components/titlesection";
import SkinnyHero from "../components/skinnyhero";
import PostsGrid from "../components/postsgrid";
import ContentCard from "../components/contentcard";

const DesignPage = ({ data }) => (
    <Layout>
        <SEO title="Design"/>
        <MainGrid>

            <Logo/>

            <NavBar/>

            <TitleSection>
                <h1>Graphic Design</h1>
                <h2>By Josh Steele</h2>
            </TitleSection>

            <SkinnyHero
                fluid={data.desktopImage.childImageSharp.fluid}
                alt="peaceful elk in the rockies, imbues a sense of calm"
            />

            <section
                css={css`
              grid-area: mainCopy;
              padding-right: 1rem;
              padding-left: 1rem;
              align-self: center;
              @media only screen and (min-width: 64.063em) {
              padding-right: 4rem;
              padding-left: 0;
              }
            `}
            >
                <h4>Welcome to my portfolio site.</h4>
                <p>This is a collection of graphic design and photography work I have done over the years. I work primarily
                    with Adobe suite, my go to being Illustrator. Vector styles make sense to me and the clean line translate
                    well to other aspects of my work. PhotoShop automation is important for bulk image optimization work,
                    and some of my preferred settings for web images can be observed in my photography below</p>
            </section>

            <PostsGrid>
                <h3 css={css`grid-area: postsHeading`}>
                    <u>Design Posts</u>
                </h3>
                <section css={css`grid-area: posts`}>
                    {data.allWordpressPost.edges.map(({ node }) => (
                        <div key={node.id}>
                            <Link
                                to={node.slug}
                                css={css`text-decoration: none`}
                            >
                                <ContentCard>
                                    <h4
                                        css={css`
                                            grid-area: cardTitle;
                                            font-size: 1.1em;
                                        `}>
                                        {node.title}
                                    </h4>

                                    <img src={node.excerpt.replace(/(<([^>]+)>)/ig,"")} alt="Preview thumbnail"/>
                                    <p css={css`grid-area: cardExcerpt`} dangerouslySetInnerHTML={{ __html: node.excerpt.string }} />
                                </ContentCard>
                            </Link>
                        </div>
                    ))}
                </section>
            </PostsGrid>
        </MainGrid>
    </Layout>
)

export const query = graphql`
    query {
        mobileImage: file(relativePath: { eq: "design/Fall.png" }) {
            childImageSharp {
                fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        desktopImage: file(relativePath: { eq: "design/Fall.png" }) {
            childImageSharp {
                fluid(maxWidth: 746 maxHeight: 950) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
                allWordpressPost(
            filter: {categories: {elemMatch: {name: {eq: "Design"}}}},
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

export default DesignPage