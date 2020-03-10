import React from "react"
import styled from "@emotion/styled"

const DesignGrid = styled.section`
  display: grid;
  grid-template-columns: auto 50px auto;
  grid-template-areas:
    "navBar navBar navBar"
    "title title title"
    "mainCopy mainCopy mainCopy"
    "flexCards flexCards flexCards"
    ". logo .";
    
  @media only screen and (min-width: 40.063em) {
    grid-template-columns: 2fr 1fr 2fr 2fr;
    grid-template-areas:
      "logo navBar navBar navBar"
      "title title title title"
      "mainCopy mainCopy mainCopy mainCopy"
      "flexCards flexCards flexCards flexCards";
  }
  
  @media only screen and (min-width: 64.063em) {
    grid-template-columns: 1fr 2fr 80px 1fr 1fr;
    grid-template-rows: 80px 1fr 1fr 1fr 1fr auto;
    grid-template-areas:
      "title logo . navBar navBar"
      "title mainCopy mainCopy mainCopy ."
      "title flexCards flexCards flexCards .";
  }
`

export default DesignGrid