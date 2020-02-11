import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import NavBar from "../components/navbar"
import MainGrid from "../components/maingrid"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description={"A showcase of my work, tastes, and opinions for employers, clients, and the odd friend."}/>
    <MainGrid>

        <Logo/>

        <div className={'navDiv'}>
            <NavBar/>
        </div>

        <div className={'subtitle'}>
            <h2>Modern Web Design</h2>
        </div>

        <div className={'title'}>
            <h1><b>By Josh Steele</b></h1>
        </div>

        <div className={'hero'}>
            <Img
            fluid={[data.desktopImage.childImageSharp.fluid]}
            alt="peaceful elk in the rockies to show home"
            className={'heroImage'}
            />
        </div>

        <div className={'longContent'}>
            <h4>Hi. Welcome to my portfolio site.</h4>
            <p> This is an area where I showcase my work, personality, tastes,
                and opinions for potential employers, clients, and the odd friend.
                Keeping this site up to date also serves as an opportunity for reflection and eventually a venue for personal growth
            </p>
            <p>
                Currently based out of Calgary, Ab. I design websites and apps in cutting edge tech stacks for small
                to medium sized businesses. On the front end I design React components and place them in a responsive
                CSS grid. Gatsby handles the back-end for CMS and simple API work, while I work with Laravel for
                more complex projects.
            </p>

            <h4>The Fastest WordPress in the West</h4>
            <p>WordPress and its fellows can be a valuable tool for business, but it is also an aging technology and the websites
                it delivers can be very slow if they are poorly designed. This sluggishness has a significant measurable impact on both exposure and conversions.
                Extensive market research has shown that pages that take longer than two seconds to load have a 50% bounce rate.
                Cutting edge technologies and techniques allow me to rebuild and deliver traditional WordPress sites at blazing speeds.
                Offline functionality, advanced image-processing, and truly responsive design result in a modern Progressive
                Web App (PWA) that will allow you to fully serve customers on any device and any network, regardless of signal strength.
            </p>
        </div>

        <div className={'darkBar'}></div>
    </MainGrid>
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
