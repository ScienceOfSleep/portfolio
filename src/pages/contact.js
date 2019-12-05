import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";
import Logo from "../components/logo";
import NavBar from "../components/navbar";

const ContactPage = ({ data }) => (
    <Layout>
        <SEO title="Contact" />
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
                <h2>Contact Information</h2>
            </div>

            {/*Row 4 Col 1*/}
            <div className={'title'}
                 style={{backgroundColor: '#1C1718'}}>
                <h1>Josh Steele</h1>
            </div>

            {/*Row 1-6 Col 2*/}
            <div className={'hero'}>
                <Img
                    fluid={[data.mobileImage.childImageSharp.fluid,
                        {
                            ...data.desktopImage.childImageSharp.fluid,
                            media: `(min-width: 768px)`,
                        },
                    ]}
                    alt=""
                />
            </div>

            {/*Row 3 Col 4-6*/}
            <div className={'contentOne'}>
                <p>Get in touch with me! My other work and personal information can be found via:</p>
            </div>

            {/*Row 4 Col 4-6*/}
            <div className={'contentTwo'}>
                <ul>
                    <li>Email: jjsteele@ualberta.ca</li>
                    <li>Github: <a href={'https://github.com/ScienceOfSleep'}> ScienceOfSleep</a></li>
                    <li>Instagram: <a href={'https://www.instagram.com/endsofinvention/'}>@endsofinvention</a></li>
                    <li>LinkedIn: <a href={'https://www.linkedin.com/in/joshua-steele-4a9529144/'}>Joshua Steele</a></li>
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

