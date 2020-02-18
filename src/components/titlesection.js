import React from "react"
import styled from "@emotion/styled"

const TitleSection = styled.section`
    grid-area: title;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--title-bg-color);
    padding: .25rem 1rem .5rem;
    margin-bottom: .5rem;
      @media only screen and (min-width: 64.063em) {
        position: sticky;
        top: 0;
        margin: 0;
      }
`

export default TitleSection