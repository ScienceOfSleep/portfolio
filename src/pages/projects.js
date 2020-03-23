import React from "react"
import {Link, graphql} from "gatsby";
import {css} from "@emotion/core";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo";
import NavBar from "../components/navbar";
import MainGrid from "../components/maingrid";
import TitleSection from "../components/titlesection";
import PostsGrid from "../components/postsgrid";
import ContentCard from "../components/contentcard";
import SkinnyHero from "../components/skinnyhero";


const ProjectsPage = ({ data }) => (
    <Layout>
        <MainGrid>
        <SEO
            title="Projects"
            description={"Web development and design project portfolio. Exploring new tech and its potential applications."}
        />

            <Logo/>

            <NavBar/>

            <TitleSection>
                <h1>Tech Project Portfolio</h1>
                <h2>By Josh Steele</h2>
            </TitleSection>

            <SkinnyHero
                fluid={data.desktopImage.childImageSharp.fluid}
                alt="sweet bluejay mural, creative and inspiring"
            />

            <section
                css={css`
                  grid-area: mainCopy;
                  padding-right: 1rem;
                  padding-left: 1rem;
                  padding-bottom: 1rem;
                  align-self: center;
                  @media only screen and (min-width: 64.063em) {
                  padding-right: 4rem;
                  padding-left: 0;
                  }
                `}
            >
                <h4>Welcome to my portfolio site.</h4>
                <p>
                    Working with the WordPress API, these project posts and blog posts are
                    read from an external site then sorted and formatted into a modern web
                    framework with all the bells and whistles that you would expect from such an
                    upgrade.
                <br/>
                    On the front end of my projects I design React components and place them in a responsive
                    CSS grid. Gatsby handles the back-end for CMS and simple API work, while I work with Laravel for
                    more complex projects.
                </p>

                <p>The project posts below serve three purposes for me. First as an extended Readme
                    and documentation of the development process. Second as a catalogue for
                    concepts and next-steps to refine projects. Third, they let me practice
                    breaking down abstract or complex programming concepts into a story that
                    is understandable or at least relatable to a layperson.</p>
            </section>
        </MainGrid>
        <section>
            <h3 css={css`
                      text-align: center;
                      padding-bottom: 1rem;
                      padding-top: 1rem;
                    `}
            >
                <u>Project Posts</u>
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
                                <p css={css`grid-area: cardExcerpt`} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </ContentCard>
                        </Link>
                    </div>
                ))}
            </section>
        </section>

    </Layout>
)

export default ProjectsPage

export const query = graphql`
    query {
        mobileImage: file(relativePath: { eq: "erik-mclean-pumokin-tabletp-unsplash.png" }) {
            childImageSharp {
                fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid_withWebp
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

        allWordpressPost(
            filter: {categories: {elemMatch: {name: {eq: "Projects"}}}},
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