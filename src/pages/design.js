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
        </MainGrid>
        <section>
            <h3 css={css`
                      text-align: center;
                      padding-top: 2rem;
                      padding-bottom: 2rem;
                    `}
            >
                <u>Design Posts</u>
            </h3>
            <section
                css={css`
                      grid-area: posts;
                      max-width: 1120px;
                      margin: auto;
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: space-between;
                      padding-bottom: 1rem;
                    `}
            >
                {data.allWordpressPost.edges.map(({ node }) => (
                    <article
                        key={node.id}
                        css={css`
                              max-width: calc(300px + 1rem);
                              padding: .5rem;
                              //border: 4px solid var(--title-bg-color);
                              border-radius: .75rem;
                              box-shadow: var(--shadow-color) 3px 3px 3px;
                              background-color: var(--elevated-bg-color);
                              margin-bottom: 1rem;
                              align-self: center;
                              &:hover{
                                box-shadow: var(--shadow-color) 2px 2px 3px 3px;
                              }
                            `}
                    >
                        <Link
                            to={node.slug}
                            css={css`text-decoration: none;`}
                        >
                            <section
                                css={css`
                                          display: grid; 
                                          grid-template-areas:
                                          "pic"
                                          "heading"
                                          ;
                                        `}
                            >
                                <h4
                                    css={css`
                                            grid-area: heading;
                                            font-size: 1.1em;
                                            text-align: center;
                                            padding: .2rem;
                                        `}>
                                    {node.title.replace(/[&][N][b][s][p][;]/ig, " ")}
                                </h4>

                                <img
                                    src={node.excerpt.replace(/(<([^>]+)>)/ig,"")}
                                    alt="Preview thumbnail"
                                    css={css`
                                          grid-area: pic;
                                          width: 100%;
                                        `}
                                />
                            </section>
                        </Link>
                    </article>
                ))}
            </section>
        </section>
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