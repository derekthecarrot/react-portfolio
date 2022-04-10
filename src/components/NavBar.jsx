import React from "react"
import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <React.Fragment>
            <div className='header'>
                <h1>Jeffery Pastva</h1>
            <nav className='navbar'>
                <ul className='navlist'>
                    <li><Link to='/'>Home </Link></li>
                    <li><Link to='/Projects'> My Projects </Link></li>
                </ul>
            </nav>
            </div>
        </React.Fragment>
    )
}

export default NavBar