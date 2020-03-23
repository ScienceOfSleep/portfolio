import React from "react"
import styled from "@emotion/styled"

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: auto 50px auto;
  grid-template-areas:
    "navBar navBar navBar"
    "hero hero hero"
    "title title title"
    "title title title"
    "mainCopy mainCopy mainCopy"
    "mainCopy mainCopy mainCopy"
    ". logo .";
    
  @media only screen and (min-width: 40.063em) {
    grid-template-columns: 2fr 1fr 2fr 2fr;
    grid-template-areas:
      "logo navBar navBar navBar"
      "hero hero hero hero"
      "title title title title"
      "mainCopy mainCopy mainCopy mainCopy"
      "mainCopy mainCopy mainCopy mainCopy";
  }
  
  @media only screen and (min-width: 64.063em) {
    grid-template-columns: 1fr 2fr 80px 1fr 1fr;
    grid-template-rows: 80px 1fr 1fr 1fr 1fr auto;
    grid-template-areas:
      "title hero logo navBar navBar"
      "title hero . mainCopy mainCopy"
      "title hero . mainCopy mainCopy"
      "title hero . mainCopy mainCopy"
      "title hero . mainCopy mainCopy";
  }
`

export default MainGrid