import React from 'react'
import '../css/Navbar.css'
import { Link } from "react-router-dom";
import { COUNTER, POSTS, USERS } from '../constants/routes'

const Navbar = () => {
  return (
      <nav className='navbar'>
        <ul>
          <li>
            <Link to={USERS}>User List</Link> 
          </li>
          <li>
            <Link to={COUNTER}>Counter</Link>
          </li>
          <li>
            <Link to={POSTS}>Posts</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;
