import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import NavBar from "../components/navbar"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
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
            <h2>Albertan Web Design</h2>
        </div>

        {/*Row 4 Col 1*/}
        <div className={'title'}
             style={{backgroundColor: '#1C1718'}}>
            <h1>By Josh Steele</h1>
        </div>

        {/*Row 1-6 Col 2*/}
        <div className={'hero'}>
            <Img
            fluid={[data.mobileImage.childImageSharp.fluid,
            {
                ...data.desktopImage.childImageSharp.fluid,
                media: `(min-width: 1024px)`,
            },
            ]}
            alt=""
            />
        </div>

        {/*Row 3 Col 4-6*/}
        <div className={'contentOne'}>
            <h4>Hi.</h4>
            <p>Welcome to my portfolio site. This is an area where I showcase my work, personality, tastes,
                and opinions for potential employers, clients, and the occasional interested friend.
                Keeping this site up to date also serves as an opportunity for reflection and eventually a venue for personal growth </p>
        </div>

        {/*Row 4 Col 4-6*/}
        <div className={'contentTwo'}>
            <h4>Who am I?</h4>
            <p>Today’s job market is always changing, and the successful professional is always adapting to meet these shifting demands.
                I bring an open mind and a desire to learn to every project that I have the privilege to be assigned;
                this combined with my unrelenting focus on clear communication and quantifiable results make me an ideal candidate
                for a field where constant personal growth is required to remain competitive.</p>
        </div>

        <div className={'leftBarA'} style={{backgroundColor: '#1C1718'}}></div>
    </section>
  </Layout>
)

export const query = graphql`
    query {
        mobileImage: file(relativePath: { eq: "brian-holdsworth-elklandscape-p-tablet-unsplash.png" }) {
            childImageSharp {
                fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        desktopImage: file(relativePath: { eq: "alec-favale-elk-unsplash-destop.png" }) {
            childImageSharp {
                fluid(maxWidth: 746 maxHeight: 950) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default IndexPage
