import React from "react"
import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link to='/'></Link> About Me </li>
                    <li><Link to='/Projects'> My Projects </Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default NavBar