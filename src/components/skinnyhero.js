import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image";
import {css} from "@emotion/core";

const SkinnyContainer = styled.aside`
    grid-area: hero;
      @media only screen and (min-width: 64.063em) {
        position: sticky;
        top: 0;
        height: 100vh;
        width: auto;
        box-sizing: border-box;
    }
`

const SkinnyHero = (props) => (
    <SkinnyContainer>
        <Img
            fluid={props.fluid}
            alt={props.alt}
            css={css`
              width: auto;
              background-color: var(--shadow-color);
                @media only screen and (min-width: 64.063em) {
                  height: 100vh;
                }
            `}
        />
    </SkinnyContainer>
)

export default SkinnyHero;
