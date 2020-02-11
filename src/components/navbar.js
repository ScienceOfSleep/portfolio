import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  color: #222;
  font-weight: ${props => props.fontWeight || 'normal'};
  text-decoration: none;
  
  &.currentPage{
  border-bottom: 2px solid #222;
  }
`;


const ListLink = props => (
    <li css={css`
      display: inline-block;
      margin-left: 1rem;
    `}>
        <h3>
            <StyledLink
                to={props.to}
                activeClassName={'currentPage'}
            >
                {props.children}
            </StyledLink>
        </h3>
    </li>
)

const NavBar = () => (
    <nav css={css`
                display: flex;
                justify-content: flex-end;
                grid-area: navBar;
              `}
    >
        <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/projects">Projects</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/contact">Contact</ListLink>
        </ul>
    </nav>
)

export default NavBar

