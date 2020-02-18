import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  color: var(--strong-font);
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
                justify-content: flex-start;
                grid-area: navBar;
                align-self: end;
                margin-bottom: 3px;
                padding-right: 1rem;
                  @media only screen and (min-width: 40.063em) {
                    font-size: 1.5rem;
                    align-self: center;
                    margin-top: 1rem;
                  }
                  @media only screen and (min-width: 64.063em) {
                    justify-content: flex-end;
                    padding-right: 4rem;
                    font-size: inherit;
                  }
              `}
    >
        <ul css={css`padding-left: 0`}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/projects">Projects</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/contact">Contact</ListLink>
        </ul>
    </nav>
)

export default NavBar

