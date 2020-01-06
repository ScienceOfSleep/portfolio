import React from "react"
import { Link } from "gatsby"


const ListLink = props => (
    <li style={{
        display: `inline-block`,
        marginLeft: `1rem`,
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

const NavBar = () => (
    <nav style={{
        display:'flex',
        justifyContent:'flex-end',
    }}>
        <h3>
            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/projects">Projects</ListLink>
                <ListLink to="/blog">Blog</ListLink>
                <ListLink to="/contact">Contact</ListLink>
            </ul>
        </h3>
    </nav>
)

export default NavBar

