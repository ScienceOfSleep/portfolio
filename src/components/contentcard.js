import React from "react"
import styled from "@emotion/styled"

const ContentCard = styled.section`
  margin: 2rem 1rem;
  padding: 10px;
  border: 2px solid var(--border-color);
  background-color: var(--elevated-bg-color);
  box-shadow: var(--shadow-color) 3px 3px;
  display: grid;
  grid-template-columns: 1fr auto 1fr; 
  grid-template-areas:
    ". cardTitle ."
    "cardExcerpt cardExcerpt cardExcerpt";
`

export default ContentCard