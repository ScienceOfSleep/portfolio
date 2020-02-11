import React from "react"
import styled from "@emotion/styled"

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: auto 50px auto;
  grid-template-areas:
    "navDiv navDiv navDiv"
    "hero hero hero"
    "subtitle subtitle subtitle"
    "title title title"
    "contentOne contentOne contentOne"
    "contentTwo contentTwo contentTwo"
    ". logo ."
    "postsGrid postsGrid postsGrid";
    
  @media only screen and (min-width: 40.063em) {
    grid-template-columns: 2fr 1fr 2fr 2fr;
    grid-template-areas:
      "logo navDiv navDiv navDiv"
      "hero hero hero hero"
      "subtitle subtitle title title"
      "contentOne contentOne contentOne contentOne"
      "contentTwo contentTwo contentTwo contentTwo"
      "postsGrid postsGrid postsGrid postsGrid";
  }
  
  @media only screen and (min-width: 64.063em) {
    grid-template-columns: 1fr 2fr 80px 1fr 1fr;
    /*grid-template-rows: 80px repeat(4, calc((100vh - 80px) / 4));*/
    grid-template-rows: 80px 1fr 1fr 1fr 1fr auto;
    grid-template-areas:
      "leftBarA hero logo navDiv navDiv"
      "leftBarA hero . . ."
      "subtitle hero . contentOne contentOne"
      "title hero . contentTwo contentTwo"
      "title hero . contentTwo contentTwo"
      "title . . postsGrid postsGrid"
  }
`

export default MainGrid