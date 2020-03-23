/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Footer from "./footer";

const Layout = ({ children }) => {
  const { title, description, author } = useSiteMetadata();

  return (
    <>
      <Global styles={css`
        :root{
          --main-bg-color: #ECEDED;
          --font: #555;
          --strong-font: #222;
          --light-font: #FFFFFF;
          --title-bg-color: #1C1718;
          --elevated-bg-color: #FFFFFF;
          --shadow-color: #A8AFB5;
          --border-color: #1C1718;
        }
         *{
          box-sizing: border-box;
          margin: 0;
          }
        html,
        body{
          margin: 0;
          padding: 0;
          background-color: var(--main-bg-color);
          color: var(--font);
          font-family: "Segoe UI", "Roboto Light", Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 1.4;
        }
        /*  remove margin for main div that gatsby mounts into */
        > div{
        margin-top: 0;
        }
        p{
        font-size: 1.1em;
        font-family: "Crimson Text", serif;
        color: var(--font);
        }
        h1,
        h2{
          font-family: 'Raleway', sans-serif;
          font-size: 2em;
          font-weight: normal;
          color: var(--light-font);
        }
        h3{
          font-size: 1.25em;
          font-family: 'Ubuntu', sans-serif;
          font-weight: normal;
          color: var(--strong-font);
        }
        h4{
          font-family: 'Fjalla One', sans-serif;
          font-size: 1em;
          font-weight: normal;
          color: var(--strong-font);
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
        line-height: 1.1;
        + * {
        margin-top: 0.5rem;
        }
        }
        strong{
        color: var(--strong-font);
        }
        li{
        margin-top: 0.25rem;
        }
        @media only screen and (min-width: 64.063em) {
          h1,
          h2{
          font-size: 4em;
          }
        }


`}/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
