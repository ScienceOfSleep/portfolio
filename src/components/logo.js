import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "JSFramedWhite.png" }) {
                childImageSharp {
                    fluid(maxWidth: 65) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <div
        css={css`
              grid-area: logo;
              width: 60px;
              margin-bottom: 1rem;
              margin-top: 1rem;
              @media only screen and (min-width: 40.063em) {
              margin-left: 1rem;
              }
              @media only screen and (min-width: 64.063em) {
              margin-left: 17px;
              margin-top: 17px;
              margin-bottom: 0;
              }
        `}
    >
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className={"logo"}
            css={css`
                grid-area: logo;
                box-shadow: var(--shadow-color) 3px 3px;
                @media only screen and (min-width: 64.063em) {
                  box-shadow: var(--shadow-color) -5px 5px 2px -2px;
                }
            `}
        />
    </div>
}

export default Logo
