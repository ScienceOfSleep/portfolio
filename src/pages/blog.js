import React from "react"
import {Link, graphql} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";
import Logo from "../components/logo";
import NavBar from "../components/navbar";

const BlogPage = ({ data }) => (
    <Layout>
        <SEO title="Blog" />
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
                <h2>Blog Page</h2>
            </div>

            {/*Row 4 Col 1*/}
            <div className={'title'}
                 style={{backgroundColor: '#1C1718'}}>
                <h1>Josh Steele</h1>
            </div>

            {/*Row 1-6 Col 2*/}
            <div className={'hero'}>
                <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt=""
                />
            </div>

            {/*Row 3-6 Col 4-6*/}
            <div className={'blogContent'}>
                <h4>What & Why</h4>
                <br/>

                <p><i>"Not that the work I do is all that important or memorable, but I prefer to think of it as ‘writing’
                    rather than as ‘content.’ And for me, that’s an important distinction. Content and writing are not the same thing,
                    at least the way that we’ve come to define them in contemporary society. Content is inherently transactional;
                    its goal is to drive towards some kind of conversion, some kind of exchange of value.
                    This is why platforms just think of it all as ‘content’; for the most part, they’re indifferent to
                    whether it’s good or bad writing, or even if it’s writing at all. It doesn’t matter whether it has any kind of inherent worth,
                    whether it’s video or animated GIFs or whatever— so long as it’s driving clicks, time spent, purchases, etc.
                    <br/><br/>
                    Again, I’m not suggesting that what I do has any superior worth at all, but what I will say is that
                    the difference between content that lives on a centralized blogging platform and what I do on a site
                    that I own and operate myself—where I don’t answer to anyone else but me—is that my writing on Subtraction.com
                    has a high tolerance for ambiguity. It’s generally about design and technology,
                    but sometimes it’s about some random subject matter, some non sequitur, some personal passion.
                    It’s a place for writing and thinking, and ambiguity is okay there, even an essential part of it.
                    That’s actually increasingly rare in our digital world now, and I personally value that a lot."</i>
                </p>
                <h4>-Khoi Vinh, 2019</h4>
                <br/>

                <p>I've always been against writing and maintaining a professional blog. Life didn't take me
                    down the path of a copywriter, so when necessary I have always preferred to contract this part out to
                    someone with a passion for it. The post above changed my mind on the topic, and really opened my eyes
                    to the benefits of a personal blog devoted to exploring a loosely connected collection of ideas, feelings,
                    and food recipes. That's the type of content that I'll be curating below.
                </p>
            </div>

            <div className={'leftBarA'} style={{backgroundColor: '#1C1718'}}></div>
        </section>
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
        file(relativePath: { eq: "brandon-erlinger-ford-ETS-unsplash.png" }) {
            childImageSharp {
                fluid(maxWidth: 746 maxHeight: 950) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
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

