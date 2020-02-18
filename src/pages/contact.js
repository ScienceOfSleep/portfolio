import React from "react"
import { graphql } from "gatsby"
import {css} from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo";
import NavBar from "../components/navbar";
import MainGrid from "../components/maingrid";
import TitleSection from "../components/titlesection";
import SkinnyHero from "../components/skinnyhero";

import Email from "../images/icons/Email.png";
import Github from "../images/icons/Github.png"
import instagram from "../images/icons/instagram.png"
import Linkedin from "../images/icons/Linkedin.png"


const ContactPage = ({ data }) => (
    <Layout>
        <SEO title="Contact" description={"Get in touch with me via eMail or on social media!"}/>
        <MainGrid>

            <Logo/>

            <NavBar/>

            <TitleSection>
                <h2>Contact Information</h2>
                <h1>Josh Steele</h1>
            </TitleSection>

            <SkinnyHero
                fluid={data.desktopImage.childImageSharp.fluid}
                alt="contact page transit hub"
            />

            <section
                css={css`
                  grid-area: mainCopy;
                  padding-right: 1rem;
                  padding-left: 1rem;
                  align-self: center;
                  @media only screen and (min-width: 64.063em) {
                  padding-right: 4rem;
                  padding-left: 0;
                  }
                `}
            >
                <h4>
                    Get in touch with me!
                </h4>
                <p>
                    My other work and personal information can be found via:
                </p>
                {/*Link list w/ Icons*/}
                <ul
                    css={css`
                    margin: 0;
                    padding: 0;
                    text-decoration: none;
                    list-style: none;
                    `}
                >
                    {/*Email*/}
                    <li
                        css={css`
                          display: flex;
                          align-content: center;
                          padding-bottom: 5px;
                          padding-top: 5px;
                        `}
                    >
                        <img
                            src={Email}
                            alt="eMail icon"
                            css={css`
                              padding-right: 4px;
                            `}
                        />
                        <p
                            css={css`
                              line-height: 1;
                              align-self: flex-end;
                              font-size: 1.3em;
                            `}
                        >
                            Email: jjsteele@ualberta.ca
                        </p>
                    </li>
                    {/*GitHub*/}
                    <li>
                        <a
                            href={'https://github.com/ScienceOfSleep'}
                            css={css`
                              text-decoration: none;
                              color: var(--font);
                              display: flex;
                              align-content: flex-end;
                              padding-bottom: 5px;
                            `}
                        >
                            <img
                                src={Github}
                                alt="Github"
                                css={css`
                                  padding-right: 4px;
                                `}
                            />
                            <p
                                css={css`
                              line-height: 1;
                              align-self: flex-end;
                              font-size: 1.3em;
                            `}
                            >
                                Github:  ScienceOfSleep
                            </p>
                        </a>
                    </li>
                    {/*IG*/}
                    <li>
                        <a
                            href={'https://www.instagram.com/endsofinvention/'}
                            css={css`
                              text-decoration: none;
                              color: var(--font);
                              display: flex;
                              align-content: center;
                              padding-bottom: 5px;
                            `}
                        >
                            <img
                                src={instagram}
                                alt="Instagram icon"
                                css={css`
                                  padding-right: 4px;
                                `}
                            />
                            <p
                                css={css`
                              line-height: 1;
                              align-self: flex-end;
                              font-size: 1.3em;
                            `}
                            >
                                Instagram: @endsofinvention
                            </p>
                        </a>
                    </li>
                    {/*LI*/}
                    <li>
                        <a
                            href={'https://www.linkedin.com/in/joshua-steele-4a9529144/'}
                            css={css`
                              text-decoration: none;
                              color: var(--font);
                              display: flex;
                              align-content: center;
                            `}
                        >
                            <img
                                src={Linkedin}
                                alt="LinkedIn icon"
                                css={css`
                                  padding-right: 4px;
                                `}
                            />
                            <p
                                css={css`
                              line-height: 1;
                              align-self: flex-end;
                              font-size: 1.3em;
                            `}
                            >
                                LinkedIn: Joshua Steele
                            </p>
                        </a>
                    </li>
                </ul>
            </section>

        </MainGrid>
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

