import React from "react"
import styled from "@emotion/styled"

const PostsGrid = styled.section`
  grid-area: postsGrid;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
          ". postsHeading ."
          "posts posts posts";
  @media only screen and (min-width: 64.063em) {
  grid-template-rows: 80px auto;
  padding-right: 3rem;
  }
`

export default PostsGrid;