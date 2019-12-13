import React from "react"
import {Link, graphql} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";
import Logo from "../components/logo";
import NavBar from "../components/navbar";

const ProjectsPage = ({ data }) => (
    <Layout>
        <SEO title="Projects" />
        <section className={'mainGrid'}>

            {/*Row 1 Col 3*/}
            <div className={'logo'}>
                <Logo/>
            </div>

            {/*Row 1 Col 4-6*/}
            <div className={'navDiv'}>
                <NavBar/>
            </div>

            {/*Row 3 Col 1*/}
            <div className={'subtitle'}>
                <h2>Tech Project Portfolio</h2>
            </div>

            {/*Row 4 Col 1*/}
            <div className={'title'}>
                <h1>By Josh Steele</h1>
            </div>

            {/*Row 1-6 Col 2*/}
            <div className={'hero'}>
                <Img
                    fluid={data.desktopImage.childImageSharp.fluid}
                    alt="sweet bluejay mural, creative and inspiring"
                    className={'heroImage'}
                />
            </div>

            {/*Row 3 Col 4-6*/}
            <div className={'contentOne'}>
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
            </div>

            {/*Row 4 Col 4-6*/}
            <div className={'contentTwo'}>
                <p>The project posts below serve three purposes for me. First as an extended Readme
                    and documentation of the development process. Second as a catalogue for
                    concepts and next-steps to refine projects. Third, they let me practice
                    breaking down abstract or complex programming concepts into a story that
                    is understandable or at least relatable to a layperson.</p>
            </div>

            <div className={'darkBar'}></div>
            <section className={'postsGrid'}>
                <div className={'postsHeading'}>
                    <h3><u>Project Posts</u></h3>
                </div>
                <div className={'postsContainer'}>
                    <div className={'posts'}>
                        {data.allWordpressPost.edges.map(({ node }) => (
                            <div key={node.id}>
                                <Link to={node.slug}>
                                    <div className={'contentCard'}>
                                        <h4 className={'contentCardTitle'}>{node.title}</h4>
                                        <div className={'contentCardExcerpt'} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
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