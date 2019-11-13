import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Calgary from "../images/Calgary.png"
import JSFramedWhite from "../images/JSFramedWhite.png"

const ListLink = props => (
    <li style={{
        display: `inline-block`,
        marginRight: `1rem`,
    }}>
        <Link to={props.to} style={{
            margin: 0,
            color: 'black',
            textDecoration: 'none'
        }}>
            {props.children}
        </Link>
    </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
        background: 'white',
    }}
  >
    <div
      style={{
          margin: `0 auto`,
          maxWidth: 960,
      }}
    >
        <img src={JSFramedWhite} alt={"JS Logo"} style={{
            width: '50px',
            marginLeft: `1.45rem`,
            display: 'inline-block',
            position: 'relative',
            top: '1vh'
        }}/>
        <h2 style={{
            display:'inline-block',
            float: "right",
            position: "relative",
            top: '3vh',
        }}>
            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/projects">Projects</ListLink>
                <ListLink to="/blog">Blog</ListLink>
                <ListLink to="/contact">Contact</ListLink>
            </ul>
        </h2>
    </div>
      <img src={Calgary}
           alt={"Calgary header image"}
           style={{
           }}
      />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
