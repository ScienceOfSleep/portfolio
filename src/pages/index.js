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
        <div className={'subtitle'}>
            <h2>Albertan Web Design</h2>
        </div>

        {/*Row 4 Col 1*/}
        <div className={'title'}>
            <h1><b>By Josh Steele</b></h1>
        </div>

        {/*Row 1-6 Col 2*/}
        <div className={'hero'}>
            <Img
            fluid={[data.desktopImage.childImageSharp.fluid]}
            alt=""
            />
        </div>

        {/*Row 3 Col 4-6*/}
        <div className={'longContent'}>
            <h4>Hi. Welcome to my portfolio site.</h4>
            <p> This is an area where I showcase my work, personality, tastes,
                and opinions for potential employers, clients, and the occasional interested friend.
                Keeping this site up to date also serves as an opportunity for reflection and eventually a venue for personal growth
            </p>
            <p>
                Currently based out of Calgary, Ab. I design websites and apps in cutting edge tech stacks for small
                to medium sized businesses. On the front end I design React components and place them in a responsive
                CSS grid. Gatsby handles the back-end for CMS and simple API work, while I work with Laravel for
                more complex projects.
            </p>
        {/*</div>*/}

        {/*/!*Row 4 Col 4-6*!/*/}
        {/*<div className={'contentTwo'}>*/}
            <h4>The Fastest WordPress in the West</h4>
            <p>WordPress and its fellows can be a valuable tool for business, but it is an aging technology and the websites
                it delivers can be very slow. This sluggishness has a significant measurable impact on both exposure and conversions.
                Extensive market research has shown that pages that take longer than two seconds to load have a 50% bounce rate.
                Cutting edge technologies and techniques allow me to rebuild and deliver traditional WordPress sites at blazing speeds.
                Offline functionality, advanced image-processing, and truly responsive design result in a modern Progressive
                Web App(PWA) that will allow you to fully serve customers on any device and any network, regardless of signal strength.
            </p>
        </div>

        <div className={'darkBar'}></div>
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
