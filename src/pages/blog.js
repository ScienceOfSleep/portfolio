import React from "react"
import {Link, graphql} from "gatsby";
import {css} from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo";
import NavBar from "../components/navbar";
import MainGrid from "../components/maingrid";
import TitleSection from "../components/titlesection";
import PostsGrid from "../components/postsgrid";
import ContentCard from "../components/contentcard";
import SkinnyHero from "../components/skinnyhero";

const BlogPage = ({ data }) => (
    <Layout>
        <SEO
            title="Blog"
            description={"Idea board for concepts in tech, strategy, and food."}
        />
        <MainGrid>

            <Logo/>

            <NavBar/>

            <TitleSection>
                <h1>Blog Page</h1>
                <h2>By Josh Steele</h2>
            </TitleSection>

            <SkinnyHero
                fluid={data.desktopImage.childImageSharp.fluid}
                alt="Blog page mountain inspo shot"
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
                <h4>What & Why</h4>
                <p>The prospect of writing and maintaining a blog has always seemed tedious to me. I've always been more of
                    a collector than a creator. The post below changed my mind on the topic, and really opened my eyes
                    to the benefits of a personal blog devoted to exploring a loosely connected collection of ideas, feelings,
                    and food recipes. A sort of next step on random tidbits that I collect over the coming months.
                    That's the type of content that I'll be curating below.
                </p>
                <br/>

                <p><i>"I prefer to think of it as ‘writing’ rather than as ‘content.’ And for me, that’s an important distinction.
                    Content and writing are not the same thing, at least the way that we’ve come to define them in contemporary society.
                    Content is inherently transactional; its goal is to drive towards some kind of conversion, some kind of exchange of value...
                    I’m not suggesting that what I do has any superior worth at all, but what I will say is that
                    the difference between content that lives on a centralized blogging platform and what I do on a site
                    that I own and operate myself—where I don’t answer to anyone else but me—is that my writing on Subtraction.com
                    has a high tolerance for ambiguity. It’s generally about design and technology,
                    but sometimes it’s about some random subject matter, some non sequitur, some personal passion.
                    It’s a place for writing and thinking, and ambiguity is okay there, even an essential part of it.
                    That’s actually increasingly rare in our digital world now, and I personally value that a lot."</i>
                </p>
                <h4 css={css`margin-top: 0.5rem`}>
                    -Khoi Vinh, 2019
                </h4>
            </section>

            <PostsGrid>
                <h3 css={css`grid-area: postsHeading`}>
                    <u>Blog Posts</u>
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
                                    <p css={css`grid-area: cardExcerpt`} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                </ContentCard>
                            </Link>
                        </div>
                    ))}
                </section>
            </PostsGrid>
        </MainGrid>
    </Layout>
)

export default BlogPage

export const query = graphql`
    query {
        mobileImage: file(relativePath: { eq: "photo-powder-tabletp-b9d4d9483d9b.png" }) {
            childImageSharp {
                fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        desktopImage: file(relativePath: { eq: "alexandra-luniel-gondola-unsplash.png" }) {
            childImageSharp {
                fluid(maxWidth: 746 maxHeight: 950) {
                    ...GatsbyImageSharpFluid_withWebp
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

