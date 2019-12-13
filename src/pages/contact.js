import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";
import Logo from "../components/logo";
import NavBar from "../components/navbar";

import Email from "../images/icons/Email.png";
import Github from "../images/icons/Github.png"
import instagram from "../images/icons/instagram.png"
import Linkedin from "../images/icons/Linkedin.png"


const ContactPage = ({ data }) => (
    <Layout>
        <SEO title="Contact" />
        <section className={'mainGrid'}>

\            <div className={'logo'}>
                <Logo/>
            </div>

            <div className={'navDiv'}>
                <NavBar/>
            </div>

            <div className={'subtitle'}
                 style={{backgroundColor: '#1C1718'}}>
                <h2>Contact Information</h2>
            </div>

            <div className={'title'}
                 style={{backgroundColor: '#1C1718'}}>
                <h1>Josh Steele</h1>
            </div>

            <div className={'hero'}>
                <Img
                    fluid={data.desktopImage.childImageSharp.fluid}
                    alt="contact page transit station"
                    className={'heroImage'}
                />
            </div>

            <div className={'contactContent'}>
                <h4>
                    Get in touch with me!
                </h4>
                <p>
                    My other work and personal information can be found via:
                </p>
                {/*Link list w/ Icons*/}
                <ul className={'contactList'}>
                    <li><img src={Email} alt="eMail icon" className={'icon1'}/>Email: jjsteele@ualberta.ca</li>
                    <li><a href={'https://github.com/ScienceOfSleep'}><img src={Github} alt="Github" className={'icon2'}/>Github:  ScienceOfSleep</a></li>
                    <li><a href={'https://www.instagram.com/endsofinvention/'}><img src={instagram} alt="Instagram icon" className={'icon2'}/>Instagram: @endsofinvention</a></li>
                    <li><a href={'https://www.linkedin.com/in/joshua-steele-4a9529144/'}><img src={Linkedin} alt="LinkedIn icon" className={'icon2'}/>LinkedIn: Joshua Steele</a></li>
                </ul>
            </div>

            <div className={'darkBar'}></div>
        </section>
    </Layout>
)

export default ContactPage

export const query = graphql`
    query {
        mobileImage: file(relativePath: { eq: "alberto-tolentino-calgary-tabletp-unsplash.png" }) {
            childImageSharp {
                fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        desktopImage: file(relativePath: { eq: "brandon-erlinger-ford-ETS-unsplash.png" }) {
            childImageSharp {
                fluid(maxWidth: 746 maxHeight: 950) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

