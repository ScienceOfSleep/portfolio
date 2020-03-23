import React from "react"
import styled from "@emotion/styled"

const ContentCard = styled.section`
  margin: 2rem 1rem;
  padding: 10px;
  width: 300px;
  //border: 3px solid var(--border-color);
  border-radius: .75rem;
  background-color: var(--elevated-bg-color);
  box-shadow: var(--shadow-color) 3px 3px;
  display: grid;
  grid-template-columns: 1fr auto 1fr; 
  grid-template-areas:
    ". cardTitle ."
    "cardExcerpt cardExcerpt cardExcerpt";
  &:hover{
    box-shadow: var(--shadow-color) 2px 2px 3px 3px;
  }
`

export default ContentCard