import React from "react"
import { Link } from "gatsby"


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

const NavBar = () => (
    <div style={{
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
    </div>
)

export default NavBar

