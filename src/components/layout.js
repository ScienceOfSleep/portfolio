/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core";
import useSiteMetadata from "../hooks/use-sitemetadata";


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
          * + *{
          margin-top: 1rem;
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
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
        color: var(--strong-font);
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


`}/>
      <main>{children}</main>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
