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

    return <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className={"logo"}
        css={css`
            grid-area: logo;
            max-width: 50px;
            margin-top: 2rem;
            margin-bottom: 1rem;
            box-shadow: var(--shadow-color) 3px 3px;
        `}
    />
}

export default Logo
