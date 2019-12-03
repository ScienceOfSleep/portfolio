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
            <h1><b>By Josh Steele</b></h1>
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
            <p>Currently based out of Calgary, Ab. I design websites and apps in cutting edge tech stacks for small
                to medium sized businesses. On the front end I design React components and place them in a responsive
                CSS grid. Gatsby handles the back-end for CMS and simple API work, while I work with Laravel for
                more complex projects.</p>
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
