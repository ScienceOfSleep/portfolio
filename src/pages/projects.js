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
            <div className={'subtitle'}
                 style={{backgroundColor: '#1C1718'}}>
                <h2>Tech Project Portfolio</h2>
            </div>

            {/*Row 4 Col 1*/}
            <div className={'title'}
                 style={{backgroundColor: '#1C1718'}}>
                <h1>Josh Steele</h1>
            </div>

            {/*Row 1-6 Col 2*/}
            <div className={'hero'}>
                <Img
                    fluid={data.desktopImage.childImageSharp.fluid}
                    alt=""
                />
            </div>

            {/*Row 3 Col 4-6*/}
            <div className={'contentOne'}>
                <p>Welcome to my portfolio site.</p>
            </div>

            {/*Row 4 Col 4-6*/}
            <div className={'contentTwo'}>
                <p>I design and build cool stuff.</p>
            </div>

            <div className={'leftBarA'} style={{backgroundColor: '#1C1718'}}></div>
        </section>
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